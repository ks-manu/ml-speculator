exports.OHLV_model = new function() {
    return {
        input:
        {
            // date: Date(),    // exclude for now ..07/01/2021
            open: 0.00,
            high: 0.00,
            low: 0.00,
            volume:0.00,
        },
        output:{
            close:0.00,
        }
    }
}