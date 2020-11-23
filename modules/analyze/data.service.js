import Realm from "realm";
import {PredictionSchema} from "../../db/schemes/prediction";
import {appLogger} from "../../logger";

export default class AnalyzeDataService {

    config = {
        schema: [PredictionSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/predictions/01.realm',
    };

    getAllCompletedPredictions(email, params) {
        return Realm.open(this.config)
            .then(realm => {
                return realm.objects('Prediction')
                    .filtered(`owner = "${email}" AND finalRate != ${0} AND time >= ${params.dateStart} AND time <= ${params.dateEnd}`)
                    .sorted('time', true);
            })
            .catch((e) => {
                appLogger.error(e.message)
            });
    }

}
