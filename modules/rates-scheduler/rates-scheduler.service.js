import {DATA_SOURCE_ENDPOINT} from "./constants";
import {StaticRatesStore} from "../../static/rates";

const axios = require('axios').default;
const scheduler = require('node-schedule');

export default class RatesSchedulerService {

    static endpoint = DATA_SOURCE_ENDPOINT;

    static instance = scheduler;

    static job = null;

    static status = 0;

    static start(currency) {
        this.job = this.instance.scheduleJob('*/45 * * * *', () => this.requestData(currency));
        this.status = 1;
    }

    static stop() {
        this.instance.cancelJob(this.job);
        this.status = 0;
    }

    static dataFetched(currency, data) {}

    static requestData(currency) {
        if (StaticRatesStore.isRequiredTimePassed()) {
            StaticRatesStore.updatePrevRequestTime();
            console.log(new Date().toLocaleTimeString());

            axios.get(`${this.endpoint}&symbols=EUR,USD,PLN,NOK,GBP,CHF,RUB`)
                .then(response => this.dataFetched(currency, response.data))
                .catch(console.error);
        }
    }
}
