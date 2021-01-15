const brain = require('brain.js');      // create supporting environment

// Neuural net types:
// Recurrent Neural Network
// RNNTimeStep
// GRUTimeStep
// LSTMTimeStep

exports.NN = function() {  // Good at generalisation and simple pattern recognition
    return new brain.NeuralNetwork();
}

exports.NN_GPU = function () { // RNN using GPU for computation
    return new brain.NeuralNetworkGPU();
}

exports.GRU = function () {
    return new brain.recurrent.GRU();
}

exports.LSTM = function () {
    return new brain.recurrent.LSTM();
}

exports.RNNTimeStep = function(){
    return new brain.recurrent.RNNTimeStep();
}

exports.GRUTimeStep = function(){
    return new brain.recurrent.GRUTimeStep();
}

exports.LSTMTimeStep = function(){
    return new brain.recurrent.LSTMTimeStep();
}

// class Agent{
//     var net;
//     var config = {};

//     setConfigs(configs) {
//         config = configs
//     }

//     setNetType(type){
//         switch(type){
//             case 'RNN':
//                 net = brain.recurrent.RNNTimeStep;
//             case 'LSTM':
//                 net = brain.recurrent.LSTMTimeStep;
//             case 'GRU':
//                 net = brain.recurrent.GRUTimeStep;
//             default:
//                 net = brain.recurrent.RNNTimeStep;
//         }
//     }

//     trainNet(data){
//         this.net.train(data, this.config);
//     }