
export class StaticRatesStore {

    static prevSet = Date.now();

    static requiredMsGap = 45 * 60 * 1000;

    static latestBase = null;

    static latestRates = {
        EUR: 0,
        NOK: 0,
        GBP: 0,
        RUB: 0,
        CHF: 0,
        PLN: 0,
    };

    static set(base, rates) {
        this.latestBase = base;
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

    static isNewValue(base, rates) {
        return this.latestBase !== base ||
            this.latestRates.EUR.toString() !== rates.EUR.toString() ||
            this.latestRates.NOK.toString() !== rates.NOK.toString() ||
            this.latestRates.GBP.toString() !== rates.GBP.toString() ||
            this.latestRates.RUB.toString() !== rates.RUB.toString() ||
            this.latestRates.CHF.toString() !== rates.CHF.toString() ||
            this.latestRates.PLN.toString() !== rates.PLN.toString();
    }

}
