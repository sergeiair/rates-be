'use strict';

export default class PredictionsController {

    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
    }

    getAll() {
        return this.dataService.getAll();
    }

    storeSingle(data) {
        this.dataService.storeSingle(data);
    }
}
