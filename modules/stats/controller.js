'use strict';

export default class StatsController {

    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
    }

    getStats() {
        return Promise.all([
            this.dataService.getUsersCount(),
            this.dataService.getPredsCount(),
            this.dataService.getHistoryCount()
        ]);
    }

}
