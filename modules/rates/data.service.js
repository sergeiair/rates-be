import Realm from "realm";
import {RateSchema} from "../../db/schemes/rates";
import {appLogger} from "../../logger";

export default class RatesDataService {

    validCurrencies = ['USD', 'EUR', 'NOK', 'GBP', 'RUB', 'CHF', 'PLN'];

    config = {
        schema: [RateSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/rates/01.realm',
    };

    getPair(base) {
        return Realm.open(this.config)
            .then(realm => {
                return realm.objects('Rate')
                    .filtered(`base = "${base}"`)
                    .sorted('id', true)
                    .slice(0, 1);
            }).catch((e) => {
                appLogger.error(e.message)
            });
    }

    getHistory(base, number) {
        return Realm.open(this.config)
            .then(realm => {
                return realm.objects('Rate')
                    .filtered(`base = "${base}"`)
                    .slice(0, number);
            }).catch((e) => {
                appLogger.error(e.message)
            });
    }

}
