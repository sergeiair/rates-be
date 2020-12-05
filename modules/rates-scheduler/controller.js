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
            this.dataService.storeSingle(data.price || {});
        }

        this.updateStaticStore(data.price || {});
    }

    updateStaticStore(rates) {
        StaticRatesStore.updateLocalLatest(rates);
    }

    isSaveAllowed(rates) {
        return StaticRatesStore.isNewValue(rates);
    }

}
