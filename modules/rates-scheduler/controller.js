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
    }

    getStatus() {
        return RatesSchedulerService.status;
    }

    dataFetched(currency, data) {
        if (this.isSaveAllowed(currency, data.rates || {})) {
            this.dataService.storeSingle(currency, data.rates || {});
        }

        this.updateStaticStore(currency, data.rates || {});
    }

    updateStaticStore(currency, rates) {
        StaticRatesStore.set(currency, rates);
    }

    isSaveAllowed(currency, rates) {
        return StaticRatesStore.isNewValue(currency, rates);
    }

}
