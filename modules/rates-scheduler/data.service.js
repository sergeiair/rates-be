import Realm from "realm";
import {RateSchema} from "../../db/schemes/rates";
import {AppLogger} from "../../logger";

export default class RatesSchedulerDataService {

    config = {
        schema: [RateSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/rates/01.realm',
    };

    getStorageRatesValues(rates) {
        return Object.keys(rates).reduce((acc, curr) => {
            if (!!rates[curr]) {
                return  { ...acc, [curr]: parseFloat(rates[curr]) }
            } else {
                return acc;
            }
        }, {});
    }

    storeSingle(rates) {
        Realm.open(this.config)
            .then(realm => {
                realm.write(() => {
                    realm.create('Rate', {
                        id: Date.now(),
                        time: new Date().toISOString(),
                        ...this.getStorageRatesValues(rates)
                    }, Realm.UpdateMode.Never);
                });

                realm.close();
            })
            .catch((e) => {
                AppLogger.error(e)
            });
    }

}
