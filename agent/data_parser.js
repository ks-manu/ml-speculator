const csv = require('csv-parser');
const fs = require('fs');

const data_model = require('../data_models/data.js');

const file_path = {
    "train": './input_data/train1.csv',
    "validate": './input_data/validate.csv',
    "test": './input_data/test.csv'
}

/*
look in input_data folder and fetch correct excel/csv
parse requirered columsn as requesteed
return data in dataframe or as data stream

open and close files (find self closing file handler)
read and iterate over lines in file
parse dates, numbers, text, bytes and data objects in right format and preserve integrity
*/
exports.parse = function(req, st="OHLV") {
    // console.log(file_path[req]);
    return new Promise((resolve, reject) => {
        let results = [];
        let dataset = fs.createReadStream(file_path[req]).pipe(csv())
        if(st=="OHLV"){
            dataset.on('data', (row) => {
                var model = new data_model.OHLV_model;
    
                model.input.Open = parseFloat(row.Open)
                model.input.High = parseFloat(row.High)
                model.input.Low = parseFloat(row.Low)
                // model.input.Volume = parseFloat(row.Volume)
                model.output.Close = parseFloat(row.Close)
                results.push(model)
                // console.log(results)
            })
            dataset.on('error', e => {
                reject(e);
            });
            return dataset.on('end', function () {  //resolve(results)
                resolve(results);
            });
        }else if(st=="SMA"){
            dataset.on('data', (row) => {
                var model = new data_model.Moving_Average_Model;
    
                model.input.Open = parseFloat(row.Open)
                model.input.High = parseFloat(row.High)
                model.input.Low = parseFloat(row.Low)
                model.input.Volume = parseFloat(row.Volume)
                model.input.SMA_20 = parseFloat(row.SMA_20)
                model.input.SMA_50 = parseFloat(row.SMA_50)
                model.input.SMA_100 = parseFloat(row.SMA_100)
                model.input.SMA_200 = parseFloat(row.SMA_200)
                model.output.Close = parseFloat(row.Close)
                results.push(model)
            })
            dataset.on('error', e => {
                reject(e);
            });
            return dataset.on('end', function () {  //resolve(results)
                resolve(results);
            });           
    
        }
    });
    
}