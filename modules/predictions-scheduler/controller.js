'use strict';

import PredictionsSchedulerService from "./predictions-scheduler.service";
import {StaticRatesStore} from "../../static/rates";

export default class PredictionsSchedulerController {

    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
        this.bindSchedulerService();
        this.enable();
    }

    enable() {
        PredictionsSchedulerService.start('USD');
    }

    getStatus() {
        return PredictionsSchedulerService.status;
    }

    bindSchedulerService() {
        PredictionsSchedulerService.startPendingItemsReview = this.fillPendingPredictions.bind(this);
    }

    fillPendingPredictions() {
        if (StaticRatesStore.ratesHaveValue()) {
            this.dataService.fillPendingPredictions(StaticRatesStore.latestRates);
        }
    }

}
