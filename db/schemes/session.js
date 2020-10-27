
export const SessionSchema = {
    name: 'Session',
    primaryKey: 'id',
    properties: {
        expired: 'int',
        id: 'string',
        info: 'string'
    }
};
