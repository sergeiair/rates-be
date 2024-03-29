
export const PredictionSchema = {
    name: 'Prediction',
    primaryKey: 'id',
    properties: {
        id: 'string',
        predRate: 'double',
        realRate: 'double',
        finalRate: 'double',
        pair:  'string',
        owner:  'string',
        time: 'int',
        verifyTime: 'int',
        forecast: 'int',
        volatility: 'int'
    }
};
