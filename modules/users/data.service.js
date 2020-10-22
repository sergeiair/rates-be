import Realm from "realm";
import {appLogger} from "../../logger";
import {UserSchema} from "../../db/schemes/user";
import {ResponseWrapper} from "../../db/helpers/responseWrapper";
import * as bcrypt from "bcrypt";

export default class UsersDataService {

    config = {
        schema: [UserSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/users/01.realm',
    };

    getUserUnsafe(email) {
        return Realm.open(this.config)
            .then(realm => realm.objectForPrimaryKey('User', email))
            .catch((e) => appLogger.error(e.message));
    }

    async getUser(data) {
        const response = new ResponseWrapper();
        const user = await this.getUserUnsafe(data.email);

        if (bcrypt.compareSync(data.pw || '', user.pw || '')) {
            response.data = {
                email: user.email,
                name: user.name
            };
        } else {
            response.error = 'Not found'
        }

        return response;
    }

    registerUser(data) {
        return Realm.open(this.config)
            .then(realm => {
                const { email, pw, name } = data;
                const response = new ResponseWrapper();
                const userNotFound = realm.objects('User')
                    .filtered(`email = "${email}"`).isEmpty();

                if (userNotFound) {
                    realm.write(() => {
                        realm.create('User', {
                            id: realm.objects('User').length + 1,
                            pw: bcrypt.hashSync(pw, 10),
                            name: name || email.split('@')[0],
                            email: email
                        }, Realm.UpdateMode.Never);

                        response.data = { email };
                    });
                } else {
                    response.error = 'Already exists';
                }

                realm.close();
                return response;
            })
            .catch((e) => {
                appLogger.error(e.message)
            });
    }

}
