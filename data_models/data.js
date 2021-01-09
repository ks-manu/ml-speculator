exports.OHLV_model = function() {
    return {
        input:
        {
            // Date: Date(),    // exclude for now ..07/01/2021
            Open: 0.00,
            High: 0.00,
            Low: 0.00,
            Volume:0.00,
        },
        output:{
            Close:0.00,
        }
    }
}