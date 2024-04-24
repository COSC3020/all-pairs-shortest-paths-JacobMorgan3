//followed algorithm steps when writing my function and used visual example on: https://blog.devgenius.io/floyd-warshall-algorithm-f004a01ae40e  to work through the problem and confirm I was doing it correctly
function allPairsShortestPaths(graph) {
    let vertices = graph.length;
    //console.log(vertices);
    var dist = [];
    for (let i = 0; i < vertices; i++) { // how to make a 2D array taken from https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/
        dist[i] = [];
        for (let j = 0; j < vertices; j++) {
            dist[i][j] = Infinity; //set all dist to Infinity
        }
    }
    //console.log(dist);
    for (let i = 0; i < dist.length; i++) { //set dist to self to 0
        dist[i][i] = 0;
    }
    //console.log(dist);
    //console.log("break");
    for (let i = 0; i < graph.length; i++) { //set dist equal to weight of edges if edge exists
        for (let j = 0; j < graph.length; j++) {
            if (graph[i][j] != 0) { //if edge exists
                //console.log(graph[i][j][1]);
                dist[i][j] = graph[i][j];
            }
        }
    }
    for (let k = 0; k < dist.length; k++) {
        for (let i = 0; i < dist.length; i++) {
            for (let j = 0; j < dist.length; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j])
                    dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
    return dist;
}

/*
//graph from the dijkstra's example in lectures
let graph = [   [0,2,1,4,0,0,0,0],
                [0,0,1,0,10,2,0,0],
                [9,0,0,0,8,0,0,0],
                [0,0,2,0,0,0,0,0],
                [0,0,0,7,0,0,1,0],
                [0,0,0,0,0,0,0,3],
                [0,0,0,0,4,2,0,0],
                [0,0,0,0,0,0,1,0]   ]         
*/         
          

//console.log(allPairsShortestPaths(graph))



//add so i can test functions
module.exports = {allPairsShortestPaths};
