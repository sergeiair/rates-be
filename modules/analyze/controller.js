'use strict';

export default class AnalyzeController {

    tfsService;
    dataService;

    constructor(_dataServiceInstance, _tfsInstance) {
        this.dataService = _dataServiceInstance;
        this.tfsService = _tfsInstance;
    }

    getAllCompletedPredictions(email, params) {
        return this.dataService.getAllCompletedPredictions(email, params);
    }




}
