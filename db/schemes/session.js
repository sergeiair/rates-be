
export const SessionSchema = {
    name: 'Session',
    primaryKey: 'email',
    properties: {
        created: 'int',
        expired: 'int',
        email: {type: 'string', indexed: true},
        token: 'string',
        deviceId: 'string'
    }
};
