import Realm from "realm";
import {RateSchema} from "../../db/schemes/rates";
import {AppLogger} from "../../logger";
import {PredictionSchema} from "../../db/schemes/prediction";
import {UserSchema} from "../../db/schemes/user";

export default class StatsDataService {

    ratesConfig = {
        schema: [RateSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/rates/01.realm',
    };

    predsConfig = {
        schema: [PredictionSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/predictions/01.realm',
    };

    usersConfig = {
        schema: [UserSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/users/01.realm',
    };

    getHistoryCount() {
        return Realm.open(this.ratesConfig)
            .then(realm => {
                return realm.objects('Rate').length;
            }).catch((e) => {
                AppLogger.error(e)
            });
    }

    getUsersCount() {
        return Realm.open(this.usersConfig)
            .then(realm => {
                return realm.objects('User').length;
            }).catch((e) => {
                AppLogger.error(e)
            });
    }

    getPredsCount() {
        return Realm.open(this.predsConfig)
            .then(realm => {
                return realm.objects('Prediction').length;
            }).catch((e) => {
                AppLogger.error(e)
            });
    }

}
