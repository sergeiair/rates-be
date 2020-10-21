
export const UserSchema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: 'int',
        email: {type: 'string', indexed: true},
        name: 'string',
        pw: 'string',
        active: {type: 'bool', default: true}
    }
};
