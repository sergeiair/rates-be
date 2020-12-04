import {PredictionSchema} from "../../db/schemes/prediction";
import Realm from "realm";
import {AppLogger} from "../../logger";
import {v1 as uuidv1} from 'uuid';
import {dissoc} from "ramda";

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
                    .filtered(`owner = "${email}"`)
                    .sorted('time', true);
            })
            .catch((e) => {
                AppLogger.error(e)
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
                        id: uuidv1()
                    }, Realm.UpdateMode.Never);
                });

                realm.close();
            }).catch((e) => AppLogger.error(e));
    }

    verifySingle(id, email, rates) {
        return Realm.open(this.config)
            .then(async realm => {
                return await new Promise((resolve) => {
                    const prediction = realm.objectForPrimaryKey('Prediction', id);

                    if (!!prediction && prediction.owner === email && !prediction.finalRate) {
                        realm.write(() => {
                            const pair = prediction.pair.replace('/', '');

                            prediction.finalRate = parseFloat(rates[pair]);
                            prediction.verifyTime = Date.now();

                            resolve(dissoc('owner', prediction))
                        });

                        realm.close();
                    } else {
                        resolve(null);
                    }
                });
            })
            .catch((e) => {
                AppLogger.error(e)
            });
    }

    getAllCompletedPredictions(email, pair) {
        return Realm.open(this.config)
            .then(realm => {
                return realm.objects('Prediction')
                    .filtered(`owner = "${email}" AND finalRate != ${0} AND pair = "${pair}"`);
            })
            .catch((e) => {
                AppLogger.error(e)
            });
    }
}
