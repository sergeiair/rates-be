import Realm from "realm";
import {PredictionSchema} from "../../db/schemes/prediction";
import {AppLogger} from "../../logger";

export default class PredictionsSchedulerDataService {

    config = {
        schema: [PredictionSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/predictions/01.realm',
    };

    fillPendingPredictions(rates) {
        return Realm.open(this.config)
            .then(realm => {
                const currentEpoch = Date.now();
                const pendingItems = realm.objects('Prediction')
                    .filtered(`finalRate = 0 AND time < ${currentEpoch}`) || [];


                realm.write(() => {
                    pendingItems.forEach((item) => {
                        const pair = item.pair.replace('/', '');

                        item.finalRate = parseFloat(rates[pair]);
                        item.verifyTime = currentEpoch;
                    });
                });

                realm.close();
            })
            .catch((e) => {
                AppLogger.error(e)
            });


    }

}
