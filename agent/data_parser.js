const csv = require('csv-parser');
const fs = require('fs');

const data_model = require('../data_models/data.js');
const file_path = './input_data/XAUUSD_D1.csv';

/*
look in input_data folder and fetch correct excel/csv
parse requirered columsn as requesteed
return data in dataframe or as data stream

open and close files (find self closing file handler)
read and iterate over lines in file
parse dates, numbers, text, bytes and data objects in rigjt format and preserve integrity
*/
exports.parse = function() {
    return new Promise((resolve, reject) => {
        let results = [];
        let dataset = fs.createReadStream(file_path).pipe(csv())
        dataset.on('data', (row) => {
            var model = new data_model.OHLV_model;

            model.input.Open = row.Open
            model.input.High = row.High
            model.input.Low = row.Low
            model.input.Volume = row.Volume
            model.output.Close = row.Close
            results.push(model)
            // console.log(results)
        })
        dataset.on('error', e => {
            reject(e);
        });
        return dataset.on('end', function () {  //resolve(results)
            resolve(results);
        });
    });
}