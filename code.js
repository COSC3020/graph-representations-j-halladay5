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

/*Bonus test trying following graph (non directional and no weights)
0 --- 1
|    /|
|  /  |
2 --- 3
*/
var testAdjMatrix = [[0, 1, 1, 0], [1, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0]];
/*when converting to list, it should be 
0: 1, 2, 
1: 0, 2, 3
2: 0, 1, 3
3: 1, 2
*/
var bonus = convertToAdjList(testAdjMatrix);
console.log(bonus);

// if the functions work correctly, they should transform bonus back to the testAdjMatrix.
var testbonus = convertToAdjMatrix(bonus);
console.log(testbonus);

function compare(a, b)
{
    if(a.length == b.length)
    {
        for(let i = 0; i < a.length; i++)
        {
            if(a[i].length != b[i].length) return false;
            for(let j = 0; j < a.length; j++)
            {
               if(a[i][j] != b[i][j]) return false;
            }
        }
        return true;
    }
    return false;
}

console.log(compare(testbonus, testAdjMatrix));
