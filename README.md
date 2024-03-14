[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

The runtime complexity relies on the number of vertices. The for loops are checking every vertice, or square in the matrix which is (vertice x vertice) and checking if an edge exists. It will do this for
every vertice. The loops will iterate n times each, (n = # of vertices) and the if statement will compare every time. The asymptotic complexity will be n x n because of the nested for loops. So it should be $\ O(n^2)$.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus 

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

The runtime complexity is based off of the edges and vertices. The first for loop will iterate n(# of vertices) times to see the amount of edges each vertice has. The second for loop will iterate 
,(e = # of edges), e times since the length of the list is the amount of edges that vertice has. So overall, the asymptotic complexity will be $\ O(E \cdot N) $. 
