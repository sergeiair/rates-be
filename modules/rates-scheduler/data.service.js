import Realm from "realm";
import {RateSchema} from "../../db/schemes/rates";
import {appLogger} from "../../logger";

export default class RatesSchedulerDataService {

    validCurrencies = ['USD', 'EUR', 'NOK', 'GBP', 'RUB', 'CHF', 'PLN'];

    config = {
        schema: [RateSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/rates/01.realm',
    };


    storeSingle(currency, rates) {
        Realm.open(this.config)
            .then(realm => {
                realm.write(() => {
                    realm.create('Rate', {
                        id: Date.now(),
                        base: currency,
                        USD: 1,
                        EUR: parseFloat(rates.USDEUR),
                        NOK: parseFloat(rates.USDNOK),
                        GBP: parseFloat(rates.USDGBP),
                        RUB: parseFloat(rates.USDRUB),
                        CHF: parseFloat(rates.USDCHF),
                        PLN: parseFloat(rates.USDPLN),
                        time: new Date().toISOString()
                    }, Realm.UpdateMode.Never);
                });

                realm.close();
            })
            .catch((e) => {
                appLogger.error(e.message)
            });
    }

}
