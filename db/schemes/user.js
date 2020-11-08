
export const UserSchema = {
    name: 'User',
    primaryKey: 'email',
    properties: {
        id: 'int',
        email: {type: 'string', indexed: true},
        name: 'string',
        pw: 'string',
        restoreToken: {type: 'string', default: ''},
        active: {type: 'bool', default: true}
    }
};
