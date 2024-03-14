
function convertToAdjList(adjMatrix) {
	var adjList = [];
    
	for (var x = 0; x < adjMatrix.length; x++)
    {
	    adjList[x] = [];
        
		for (var y = 0; y < adjMatrix[x].length; y++) 
        {
			if (adjMatrix[x][y] == 1) 
            {
				adjList[x].push(y);
			}
		}
	}
	return adjList;
}
