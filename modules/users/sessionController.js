'use strict';

export default class SessionController {

    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
    }

    getSession(email) {
        return this.dataService.getSession(email);
    }


}
