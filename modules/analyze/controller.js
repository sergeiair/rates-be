'use strict';

import {loadedData, PredictionsTFService} from "../../tf/predictionsTFService";
import {appLogger} from "../../logger";

export default class AnalyzeController {

    tfsService;
    dataService;

    constructor(_dataServiceInstance, _tfsInstance) {
        this.dataService = _dataServiceInstance;
        this.tfsService = _tfsInstance;
    }

    computeAllPredictions(email) {
        const predictions = this.dataService.getAllPredictions(email);
        /*const service = new PredictionsTFService();
        service.init(loadedData);
        .then(appLogger.warn);*/


        return service.getResult([1, 3, 1.0, 1.1], 500);
    }


}
