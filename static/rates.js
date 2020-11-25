
export class StaticRatesStore {

    static prevSet = Date.now();

    static requiredMsGap = 45 * 60 * 1000;

    static latestBase = null;

    static latestRates = {
        USDEUR: 0,
        USDNOK: 0,
        USDGBP: 0,
        USDRUB: 0,
        USDCHF: 0,
        USDPLN: 0,
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
            this.latestRates.USDEUR.toString() !== rates.USDEUR.toString() ||
            this.latestRates.USDNOK.toString() !== rates.USDNOK.toString() ||
            this.latestRates.USDGBP.toString() !== rates.USDGBP.toString() ||
            this.latestRates.USDRUB.toString() !== rates.USDRUB.toString() ||
            this.latestRates.USDCHF.toString() !== rates.USDCHF.toString() ||
            this.latestRates.USDPLN.toString() !== rates.USDPLN.toString();
    }

}
