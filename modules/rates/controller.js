'use strict';

export default class RatesController {

    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
    }

    getHistory(base, number) {
        return this.dataService.getHistory(number);
    }

}
