
export const RateSchema = {
    name: 'Rate',
    primaryKey: 'id',
    properties: {
        id: 'int',
        base: {type: 'string', indexed: true},
        USD: 'double',
        EUR: 'double',
        NOK: 'double',
        GBP: 'double',
        RUB: 'double',
        CHF: 'double',
        PLN: 'double',
        time: 'string',
    }
};
