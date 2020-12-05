import Realm from "realm";
import {RateSchema} from "../../db/schemes/rates";
import {AppLogger} from "../../logger";

export default class RatesDataService {

    config = {
        schema: [RateSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/rates/01.realm',
    };

    getHistory(number) {
        return Realm.open(this.config)
            .then(realm => {
                return realm.objects('Rate')
                    .sorted('id', false)
                    .slice(0, number);
            }).catch((e) => {
                AppLogger.error(e)
            });
    }

}
