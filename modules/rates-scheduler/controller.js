'use strict';

import RatesSchedulerService from "./rates-scheduler.service";
import {StaticRatesStore} from "../../static/rates";

export default class RatesSchedulerController {

    dataService;

    constructor(_dataServiceInstance) {
        this.dataService = _dataServiceInstance;
        this.bindSchedulerService();
        this.enable()
    }

    bindSchedulerService() {
        RatesSchedulerService.dataFetched = this.dataFetched.bind(this);
    }

    enable() {
        RatesSchedulerService.start('USD');
        RatesSchedulerService.requestDataImidiate('USD')
    }

    getStatus() {
        return RatesSchedulerService.status;
    }

    dataFetched(currency, data) {
        if (this.isSaveAllowed(currency, data.price || {})) {
            this.dataService.storeSingle(currency, data.price || {});
        }

        this.updateStaticStore(currency, data.price || {});
    }

    updateStaticStore(currency, rates) {
        StaticRatesStore.set(currency, rates);
    }

    isSaveAllowed(currency, rates) {
        return StaticRatesStore.isNewValue(currency, rates);
    }

}
