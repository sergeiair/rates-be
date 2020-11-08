'use strict';

import {Mailer} from "../../mailer/mailer";
import {getRestoreHTML} from "../../utils/email";

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

    async initRestore(email) {
        const params = await this.dataService.getRestoreToken(email);

        if (params.data.token) {
            Mailer.sendPwReset(email, getRestoreHTML(params.data.name, params.data.token))
        }

        return params;
    }

    createPw(pw, token) {
        return this.dataService.createPw(pw, token);
    }


}
