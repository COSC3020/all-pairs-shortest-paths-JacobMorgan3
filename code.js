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
    
    
    
    
    
    return dist;
}


graph = [  [0,1,0],
           [1,0,0],
           [1,1,0]  ]; 
          

console.log(allPairsShortestPaths(graph))
