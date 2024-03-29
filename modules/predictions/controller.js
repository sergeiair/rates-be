'use strict';

import {PredictionTFService} from "../../tf/predictionTFService";
import {StaticRatesStore} from "../../static/rates";

export default class PredictionsController {

    tfsService;
    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
    }

    getAll(email) {
        return this.dataService.getAll(email);
    }

    clearAll(email) {
        return this.dataService.clearAll(email);
    }

    storeSingle(data) {
        this.dataService.storeSingle(this.getPreparedPredData(data));
    }

    verifySingle(data, email) {
        return this.dataService.verifySingle(data.id, email, StaticRatesStore.latestRates);
    }

    getPreparedPredData(data) {
        return {
            ...data,
            volatility: this.getVolatilityByPair(data.volatility, data.pair)
        }
    }

    getVolatilityByPair(value, pair) {
        if (!!value) {
            return value;
        } else {
            switch (pair) {
                case 'USD/CHF':
                case 'EUR/CHF':
                    return 1;
                case 'GBP/USD':
                case 'USD/EUR':
                case 'USD/JPY':
                case 'USD/PLN':
                case 'EUR/PLN':
                    return 2;
                case 'USD/RUB':
                    return 4;
                default:
                    return 3;
            }
        }
    }

    async prepareTFService(params, email) {
        const predictions = await this.dataService.getAllCompletedPredictions(email, params.pair);

        if (!!predictions && predictions.length) {
            const data4TF = predictions.map((pred) => ({
                predRate: pred.predRate,
                realRate: pred.realRate,
                finalRate: pred.finalRate,
                forecast: pred.forecast,
                volatility: pred.volatility
            }));

            this.tfsService = undefined;
            this.tfsService = new PredictionTFService(data4TF);

            return await this.tfsService.trainModel(500, 32);
        } else {
            return 'empty'
        }
    }

    getComputedPrediction(params) {
        return this.tfsService.getResult([
            this.getVolatilityByPair(params.volatility, params.pair),
            params.forecast,
            params.realRate,
            params.predRate
        ], 500);
    }
}
