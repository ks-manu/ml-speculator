// NN here
const brain = require('brain.js');

// const net = new brain.NeuralNetwork();
// Neuural net types:
// RNNTimeStep
// GRUTimeStep
// LSTMTimeStep

const net = new brain.recurrent.RNNTimeStep();