
export const RateSchema = {
    name: 'Rate',
    primaryKey: 'id',
    properties: {
        id: 'int',

        EURUSD: 'double',
        EURPLN: 'double',
        EURCHF: 'double',
        EURGBP: 'double',

        USDNOK: 'double',
        GBPUSD: 'double',
        USDRUB: 'double',
        USDCHF: 'double',
        USDPLN: 'double',
        USDJPY: 'double',

        time: 'string',
    }
};
