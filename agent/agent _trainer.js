/*
summon agent
provide training data evaluate progress
evaluate agent performance with test data
provide report on agent performance withh key statistics

### extra todo
# trainer should be able to terminate the activviteies of an agent when it obtains desired 
# add test/malformed pieces of data to attemtp to obtain abnotmal behaviour of neural net 
*/
const brain = require('brain.js');      // create environment
const agent = require('./agent.js');       // import neural network
const config = require('./agent_configs.js');    // import neural network configs
const data_model = require('../data_models/data.js');   // import data models
const data_parser = require('./data_parser.js'); // import data parser

// var net;
// var data;
async function init(){
    const net = agent.RNNTimeStep();      // instantiate neural network
    console.log("Agent initialised")
    // console.log(net.toJSON())
    return net;
}

async function datahub(purpose, st="OHLV"){      // prepare data

    console.log("Parsing data for "+st+"... please wait\n");
    if(st=="OHLV"){
        return await data_parser.parse(purpose, 'OHLV')
    }else if(st='SMA') {
        return await data_parser.parse(purpose, st="MA");
    }
}

function trainNet(net, training_data, configs) {
    console.log("Training started... please wait")
    return net.train(training_data, configs);    // train neural net    
}

function testNet(net, test_data) {
    console.log("Testing started... please wait");
    return net.test(test_data);
}

function runNet(net, input_data) {
    console.log("Running agent")
    // var output = 
    return net.run(input_data);
    // console.log(output);
    // return output;
    
}

function forecast(net, input_data) {
    console.log("Agent is reasoning.... please wait");
    return net.forecast(input_data);
}

init().then(async (nett) => {
    // console.log(nett.toJSON());

    // Fetch data and push to Neural Net
    // var data = 
    await datahub("train", st='SMA').then((dataa) => {

        // console.log("\nData sample:\n",dataa[0])
        console.log("\nTraining Data parsed and ready...")
        // return dataa;
        // data = dataa
        // console.log(data.length)
        trainNet(nett, dataa, config.config)
        console.log("Done training");

    });

    await datahub("test", st='SMA').then((data) =>{
        console.log("Test Data parsed and ready...")
        testNet(nett, data);
        console.log("Done testing");
        
    })

        // console.log(nett.toJSON());
        test = [{input:{Open: 1282.295, High:1282.345, Low: 1280.598, Volume: 60}}] //  output:{Close: 1281.118}
        // test = [{input:{Open: 1177.962, High: 1180.047, Low: 1177.709, Volume: 120}}] // close: 1178.56
        console.log("Expected Output: 1281.118 [range]. Received Input: ", test );

        console.log("Attempting forecast... please wait");
        console.log(forecast(nett, test));
    // })
    
    
    // console.log("\nProcessing. Please wait... ")
    
    // net = trainNet(nett, data);
})




// console.log(data);


