import Realm from "realm";
import {PredictionSchema} from "../../db/schemes/prediction";
import {appLogger} from "../../logger";

export default class AnalyzeDataService {

    config = {
        schema: [PredictionSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/predictions/01.realm',
    };

    getAllPredictions(email) {
        return Realm.open(this.config)
            .then(realm => {
                return realm.objects('Prediction')
                    .filtered(`owner = "${email}"`);
            })
            .catch((e) => {
                appLogger.error(e.message)
            });
    }

}
