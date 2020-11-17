import {appLogger} from "../logger";

const tf = require('@tensorflow/tfjs-node');

export class PredictionTFService {

    isRunning = false;

    model = tf.sequential();

    inputTnsr = null;
    labelTnsr = null;

    _data = [];

    constructor(data) {
        this.configure();
        this.init(data);
    }

    getPrediction(params, inputMax, inputMinVal, labelMinVal, labelMax) {
        return tf.tidy(() => {
            const normalizedPredTnsr = tf.tensor2d(params, [1, params.length]);
            const normalizedPredVals = normalizedPredTnsr.sub(inputMinVal).div(inputMax.sub(inputMinVal));
            const predResult = this.model.predict(normalizedPredVals.reshape([1, params.length]));
            const readablePred = predResult.mul(labelMax.sub(labelMinVal)).add(labelMinVal);

            return readablePred.dataSync();
        });
    }

    getNormalizedValues() {
        return tf.tidy(() => {
            const inputMax = this.inputTnsr.max();
            const inputMinVal = this.inputTnsr.min();
            const labelMax = this.labelTnsr.max();
            const labelMinVal = this.labelTnsr.min();

            return {
                inputs: this.inputTnsr.sub(inputMinVal).div(inputMax.sub(inputMinVal)),
                labels: this.labelTnsr.sub(labelMinVal).div(labelMax.sub(labelMinVal)),
                inputMax,
                inputMinVal,
                labelMax,
                labelMinVal,
            }
        });
    }

    init(items) {
        this._data = items || [];

        this.initTensors();
    }

    initTensors() {
        tf.util.shuffle(this._data);
        this.initInputTnsr();
        this.initLabelsTnsr();
    }

    initInputTnsr() {
        this.inputTnsr = tf.tensor(this._data.map((item) => ([
            item.volatility, item.forecast, item.realRate, item.predRate
        ])));
    }

    initLabelsTnsr() {
        this.labelTnsr = tf.tensor2d(
            this._data.map((item) => item.finalRate
        ), [this._data.length, 1]);
    }

    configure() {
        this.model.add(tf.layers.dense({ units: 1, inputShape: [4] }));
        this.model.add(tf.layers.dense({ units: 1, useBias: true }));
        this.model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
    }

    destroy() {
        this.model.dispose()
    }

    async getResult(params) {
        const { inputMax, inputMinVal, labelMinVal, labelMax } = this.getNormalizedValues();

        return this.getPrediction(params, inputMax, inputMinVal, labelMinVal, labelMax);
    }

    trainModel(epochs, batchSize) {
        const { inputs, labels } = this.getNormalizedValues();

        return new Promise((resolve, reject) => {
            if (!this.isRunning) {
                this.isRunning = true;
                this.model.fit(inputs, labels, {
                    batchSize,
                    epochs
                }).then(() => {
                    this.isRunning = false;
                    resolve('trainingDone');
                });
            }
        });
    }



}
