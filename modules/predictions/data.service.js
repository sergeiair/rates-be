import {PredictionSchema} from "../../db/schemes/prediction";
import Realm from "realm";
import {appLogger} from "../../logger";

export default class PredictionsDataService {

    config = {
        schema: [PredictionSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/predictions/01.realm',
    };

    getAll(email) {
        return Realm.open(this.config)
            .then(realm => {
                return realm.objects('Prediction')
                    .filtered(`owner = "${email}"`);
            })
            .catch((e) => {
                appLogger.error(e.message)
            });
    }

    storeSingle(data) {
        Realm.open(this.config)
            .then(realm => {

                realm.write(() => {
                    realm.create('Prediction', {
                        ...data,
                        finalRate: 0,
                        verifyTime: 0,
                        id: Date.now()
                    }, Realm.UpdateMode.Never);
                });

                realm.close();
            }).catch((e) => appLogger.error(e.message));
    }
}
