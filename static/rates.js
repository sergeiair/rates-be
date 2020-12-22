
import {PAIRS} from "../modules/rates-scheduler/constants";

export class StaticRatesStore {

    static prevSet = Date.now();

    static requiredMsGap = 5 * 60 * 1000;

    static _latestRates = {};

    static get latestRates() {
        if (!this._latestRates || !Object.keys(this._latestRates).length) {
            this._latestRates = PAIRS.reduce((acc, curr) => ({ ...acc, [curr]: 0 }), {});
        }

        return this._latestRates;
    }

    static set latestRates(value) {
        this._latestRates = value;
    }

    static updateLocalLatest(rates) {
        this.latestRates = rates;
    }

    static ratesHaveValue() {
        return !!this.latestRates && !!Object.keys(this.latestRates).length;
    }

    static isRequiredTimePassed() {
        return Date.now() - this.prevSet > this.requiredMsGap;
    }

    static updatePrevRequestTime() {
        this.prevSet = Date.now();
    }

    static isNewValue(rates) {
        return Object.keys(rates || {})
            .some((pair) => rates[pair] !== this.latestRates[pair]);
    }

}
