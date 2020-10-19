'use strict';

export default class RatesController {

    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
    }

    getPair(base, second) {
        return this.dataService.getPair(base);
    }

    getHistory(base, number) {
        return this.dataService.getHistory(base, number);
    }

}
