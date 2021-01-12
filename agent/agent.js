const brain = require('brain.js');      // create supporting environment

// Neuural net types:
// Recurrent Neural Network
// RNNTimeStep
// GRUTimeStep
// LSTMTimeStep

exports.RNN = function(config) {
    return new brain.NeuralNetwork(config);
}
exports.RNNTimeStep = function(config){
    return new brain.recurrent.RNNTimeStep(config);
}

exports.GRUTimeStep = function(config){
    return new brain.recurrent.GRUTimeStep(config);
}

exports.LSTMTimeStep = function(config){
    return new brain.recurrent.LSTMTimeStep(config);
}

class Agent {
    // Agent();
    net;
    config = {};

    setConfigs(configs) {
        config = configs
    }

    setNetType(type){
        switch(type){
            case 'RNN':
                net = brain.recurrent.RNNTimeStep;
            case 'LSTM':
                net = brain.recurrent.LSTMTimeStep;
            case 'GRU':
                net = brain.recurrent.GRUTimeStep;
            default:
                net = brain.recurrent.RNNTimeStep;
        }
    }

    trainNet(data){
        this.net.train(data, this.config);
    }

    runNet(data){
        return this.net.run(data);
    }
}