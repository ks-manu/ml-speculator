/*
summon agent
provide training data evaluate progress
evaluate agent performance with test data
provide report on agent performance withh key statistics

### todo
# trainer should be able to terminate the activviteies of an agent when it obtains desired 
# add test/malformed pieces of data to attemtp to obtain abnotmal behaviour of neural net 
*/
const brain = require('brain.js');      // create environment
const agent = require('./agent.js');       // import neural network
const config = require('./agent_configs.js');    // import neural network configs
const data_model = require('../data_models/data.js');   // import data models
const data_parser = require('./data_parser.js'); // import data parser

var net;
var data;
async function init(){
    return agent.RNNTimeStep(config.config);      // instantiate neural network
}

async function datahub(){      // prepare data
    return await data_parser.parse();
}

init().then(datahub())




// console.log(data);


