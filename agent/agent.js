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