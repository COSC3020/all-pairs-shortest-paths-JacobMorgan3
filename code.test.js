const code = require("./code.js");
const assert = require("assert");

//function for arrayEqualTo
function arrayEqual(a, b) {
  return JSON.stringify(a) == JSON.stringify(b); 
}

//assign graph and sourceNode values:
let graph = [   [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0]   ];

let a = code.allPairsShortestPaths(graph);
let b = [ [0,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity], //since there is no edge between different node, every dist is set to Infinity, other than the edge to itself 
          [Infinity,0,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity],
          [Infinity,Infinity,0,Infinity,Infinity,Infinity,Infinity,Infinity],
          [Infinity,Infinity,Infinity,0,Infinity,Infinity,Infinity,Infinity],
          [Infinity,Infinity,Infinity,Infinity,0,Infinity,Infinity,Infinity],
          [Infinity,Infinity,Infinity,Infinity,Infinity,0,Infinity,Infinity],
          [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,0,Infinity],
          [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,0] ]; 


/////// Test 1 ////////////////////////// when input graph has no edges, should produce a graph of zeros that is the same size as input 
assert(arrayEqual(a,b));


/////// Test 2 //////////////////////////

graph = [   [0,2,1,4,0,0,0,0],
            [0,0,1,0,10,2,0,0],
            [9,0,0,0,8,0,0,0],
            [0,0,2,0,0,0,0,0],
            [0,0,0,7,0,0,1,0],
            [0,0,0,0,0,0,0,3],
            [0,0,0,0,4,2,0,0],
            [0,0,0,0,0,0,1,0]   ];

a = code.allPairsShortestPaths(graph);
b = [   [0, 2, 1, 4, 9, 4, 8, 7],             //get the answer by running my dijkstra algorithm for each souce node and then copying the output into this matrix
        [10, 0, 1, 14, 9, 2, 6, 5],
        [9, 11, 0, 13, 8, 11, 9, 14],
        [11, 13, 2, 0, 10, 13, 11, 16],
        [18, 20, 9, 7, 0, 3, 1, 6],
        [26, 28, 17, 15, 8, 0, 4, 3],
        [22, 24, 13, 11, 4, 2, 0, 5],
        [23, 25, 14, 12, 5, 3, 1, 0]   ]; 

//Test
assert(arrayEqual(a,b));


/////// Test 3 //////////////////////////

graph = [  [0,3,0,5],    //example graph on https://blog.devgenius.io/floyd-warshall-algorithm-f004a01ae40e
           [2,0,0,4],
           [0,1,0,0],
           [0,0,2,0]  ];


a = code.allPairsShortestPaths(graph);
b = [  [0,3,7,5], //answer from https://blog.devgenius.io/floyd-warshall-algorithm-f004a01ae40e 
       [2,0,6,4],
       [3,1,0,5],
       [5,3,2,0]  ]; 

//Test
assert(arrayEqual(a,b));



