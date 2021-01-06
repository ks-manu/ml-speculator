// check input_data folder for files
const brain = require('brain.js');

// const net = new brain.NeuralNetwork();
const net = new brain.recurrent.RNNTimeStep();

// net.train([[1, 2, 3]]);

// const output = net.run([1, 2]); 

// net.train([
//   { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 } },
//   { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } },
//   { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 } },
// ]);

// const output = net.run({ r: 1, g: 0.4, b: 0 }); // { white: 0.99, black: 0.002 }

// Close	Volume
// 635.943	604
// 639.143	1282
// 626.602	1302
// 622.533	1365
// 606.841	1284
// 607.867	72
// 609.123	1346
// 612.759	1347
// 611.169	1393
// 611.09	1440
// 626.233	1320
// 625.707	120
// 626.218	1440
// 623.447	1436
// 632.695	1367
// 627.648	1343
// 634.771	1259
// 634.619	50

var data = [
    {input:{p1:635.943, v1:604 }, output:{p2:639.143}},
    {input:{p1:639.143, v1:1282 }, output:{p2:626.602}},
    {input:{p1:626.602, v1:1302 }, output:{p2:622.533}},
    {input:{p1:622.533, v1:1365 }, output:{p2:606.841}},
    {input:{p1:606.841, v1:1284 }, output:{p2:607.867}},
    {input:{p1:607.867, v1:72 }, output:{p2:609.123}},
    {input:{p1:609.123, v1:1346 }, output:{p2:612.759}},
    {input:{p1:612.759, v1:1347 }, output:{p2:611.169}},
    {input:{p1:611.169, v1:1393 }, output:{p2:611.09}}
]
net.train(data, {iterations:30000, errorThresh: 0.02, log:true, learningRate:0.3, hiddenLayers:[5000]});
const output = net.run({p1:627.648, v1: 1343});
// const o1 = net.run()
console.log(output);

// RNNTimeStep 634.86
// LSTMTimeStep 785.20
// GRUTimeStep 216.43