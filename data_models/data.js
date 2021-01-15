exports.OHLV_model = function () {
    
    return {
        input:
        {
            // Date: Date(),    // exclude for now ..07/01/2021
            Open: 0.00,
            High: 0.00,
            Low: 0.00,
            // Volume:0.00, // causes 'confusion' in predictions likely due to poor correlation
        },
        output:{
            Close:0.00,
        }
    }
}

exports.Moving_Average_Model = function () {
    
    return {
        input:{
            Open: 0.00,
            High: 0.00,
            Low: 0.00,
            SMA_20: 0.00,
            SMA_50: 0.00,
            SMA_100: 0.00,
            SMA_200: 0.00,
            Volume:0.00,
        },
        output:{
            Close: 0.00
        }
        
    }
}

exports.Moving_Average_Model_beta = function () {
    
    return {
        input:{
            Open: 0.00,
            High: 0.00,
            Low: 0.00,
            SMA_20: 0.00,
            SMA_50: 0.00,
            SMA_100: 0.00,
            SMA_200: 0.00,
            Volume:0.00,
            Close: 0.00,
        },
        output:{
            Next_Close: 0.00
        }
        
    }
}