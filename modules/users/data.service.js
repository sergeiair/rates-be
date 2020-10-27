import Realm from "realm";
import * as bcrypt from "bcrypt";
import {appLogger} from "../../logger";
import {UserSchema} from "../../db/schemes/user";
import {ResponseWrapper} from "../../db/helpers/responseWrapper";
import {SessionSchema} from "../../db/schemes/session";
import {sessionConfig} from "../../middlewares";
import * as md5 from "md5";

export default class UsersDataService {

    userConfig = {
        schema: [UserSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/users/01.realm',
    };

    sessionConfig = {
        schema: [SessionSchema],
        deleteRealmIfMigrationNeeded: true,
        path: './db/files/sessions/01.realm',
    };

    getUserUnsafe(email) {
        return Realm.open(this.userConfig)
            .then(realm => realm.objectForPrimaryKey('User', email))
            .catch((e) => appLogger.error(e.message));
    }

    getSession(email) {
        return Realm.open(this.sessionConfig)
            .then(realm => realm.objectForPrimaryKey('Session', email))
            .catch((e) => appLogger.error(e.message));
    }

    async getUser(data) {
        const response = new ResponseWrapper();
        const user = await this.getUserUnsafe(data.email);

        if (!!user && bcrypt.compareSync(data.pw || '', user.pw || '')) {
            response.data = {
                hashedEmail: md5(user.email),
                email: user.email,
                name: user.name
            };
        } else {
            response.error = 'Not found';
            response.code = 404;
        }

        return response;
    }

    storeSession(email, ip) {
        return Realm.open(this.sessionConfig)
            .then(realm => {
                realm.write(() => {
                    realm.create('Session', {
                        expired: Date.now() + sessionConfig.maxAge,
                        id: email,
                        info: ip
                    }, Realm.UpdateMode.Modified);
                });

                realm.close();
            })
            .catch((e) => {
                appLogger.error(e.message)
            });
    }

    destroySession(email) {
        return Realm.open(this.sessionConfig)
            .then(realm => {
                const session = realm.objectForPrimaryKey('Session', email);

                if (!!session) {
                    realm.write(() => {
                        realm.delete(session)
                    });
                }

                realm.close();
            })
            .catch((e) => {
                appLogger.error(e.message)
            });
    }

    registerUser(data) {
        return Realm.open(this.userConfig)
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
