'use strict';

export default class UsersController {

    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
    }

    register(data) {
        return this.dataService.registerUser(data);
    }

    getUser(data) {
        return this.dataService.getUser(data);
    }

    storeSession(email, ip) {
        return this.dataService.storeSession(email, ip);
    }

    destroySession(email) {
        return this.dataService.destroySession(email);
    }


}
