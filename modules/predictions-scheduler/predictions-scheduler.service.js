
const scheduler = require('node-schedule');

export default class PredictionsSchedulerService {

    static instance = scheduler;

    static job = null;

    static status = 0;

    static start(currency) {
        this.job = this.instance.scheduleJob('*/30 * * * * *', () =>
            this.startPendingItemsReview(currency));
        this.status = 1;
    }

    static stop() {
        this.instance.cancelJob(this.job);
        this.status = 0;
    }

    static startPendingItemsReview(currency) {}


}
