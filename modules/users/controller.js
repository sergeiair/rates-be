'use strict';

import * as bcrypt from "bcrypt";

export default class UsersController {

    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
    }

    async register(data) {
        return new Promise((resolve) => {
            resolve(this.dataService.registerUser(data));
        })
    }

    async getUser(data) {
        return new Promise((resolve) => {
            resolve(this.dataService.getUser(data));
        })
    }


}
