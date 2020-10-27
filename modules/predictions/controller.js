'use strict';

export default class PredictionsController {

    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
    }

    getAll(email) {
        return this.dataService.getAll(email);
    }

    storeSingle(data) {
        this.dataService.storeSingle(data);
    }
}
