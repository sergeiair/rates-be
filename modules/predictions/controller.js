'use strict';

import {appLogger} from "../../logger";

export default class PredictionsController {

    tfsService;
    dataService;

    constructor(_dataServiceInstance, _tfsInstance) {
        this.dataService = _dataServiceInstance;
        this.tfsService = _tfsInstance;
    }

    getAll(email) {
        return this.dataService.getAll(email);
    }

    storeSingle(data) {
        this.dataService.storeSingle(this.getPreparedPredData(data));
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
                    return 1;
                case 'USD/GBP':
                case 'USD/EUR':
                    return 2;
                case 'USD/RUB':
                    return 4;
                default:
                    return 3;
            }
        }
    }

    async getPredRateByHistory(params, email) {
        return this.dataService.getAllCompletedPredictions(email)
            /*.then((predictions) => {
                const data4TF = predictions.map((pred) => ({
                    predRate: pred.predRate,
                    realRate: pred.realRate,
                    finalRate: pred.finalRate,
                    forecast: pred.forecast,
                    volatility: pred.volatility
                }));

                this.tfsService.init(data4TF);

                return this.tfsService.getResult([
                    this.getVolatilityByPair(params.volatility, params.pair),
                    params.forecast,
                    params.realRate,
                    params.predRate
                ], 10);
            });*/
    }
}
