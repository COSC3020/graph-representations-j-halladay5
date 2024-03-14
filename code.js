function convertToAdjList(adjMatrix) 
{
	var adjList = [];
	for(var x = 0; x < adjMatrix.length; x++)
    	{
	    adjList[x] = [];
	    for(var y = 0; y < adjMatrix[x].length; y++) 
            {
		if (adjMatrix[x][y] == 1) 
            	{
			adjList[x].push(y);
		}
	    }
	}
	return adjList;
}

//Bonus
function convertToAdjMatrix(adjList)
{
    var adjMatrix = [];
    for (var i = 0; i < adjList.length; i++) 
    {
        adjMatrix[i] = Array(adjList.length).fill(0);
        for (var j = 0; j < adjList[i].length; j++)
        {
            var edge = adjList[i][j];
            adjMatrix[i][edge] = 1;
        }
    }
    return adjMatrix;
}

