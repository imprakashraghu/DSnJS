 // FACEBOOK => UNDIRECTED GRAPH (TWO-WAY CONNECTIONS)
 // INSTAGRAM => DIRECTED GRAPH 
 // GOOGLE MAPS => WEIGHTED GRAPH

/*    edge
    A ----- B ----- E
    |       |
    |       |
    C ----- D vertex
*/         

// REPRESENTATION USING CODE
// ADJACENY MATRIX/LIST
/*
        --- A ------ B
        |            |  
        F          C -          
        |          |        
        ---- E --- D
*/
// => adjaceny list (UNDIRECTED GRAPH)

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) { // add the value to the adj list as key and a value of empty array
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) { // push the value to the array of the value to the adj list
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) { // remove the value from the array of the value in the adj list
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) { // removes the vertex from the adj list including its edges
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(start) { // traversing the graph recursively deepening
        const result = [];
        const visited = {};        
        const adjacencyList = this.adjacencyList;
        
        (
            function DFS(vertex) {
                if(!vertex) return null; // base case      
                visited[vertex] = true;
                result.push(vertex);
                adjacencyList[vertex].forEach(neighbour => {
                    if(!visited[neighbour]) {
                        return DFS(neighbour);
                    }
                });
            }            
        )(start)

        return result;
    }

    depthFirstIterative(start) {  // traversing the graph iteratively deepening using stack
        const result = []; // array of nodes
        const visited = {}; // visited vertices
        const stack = [start]; // stack
        let currentVertex;

        visited[start] = true;    

        while(stack.length) {            
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });

        }

        return result;
    }

    breadthFirst(start) { // traversing a graph using queue widening
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(queue.length) {
            currentVertex = queue.shift(); // removes item from the beginning of the list
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });

            // this.adjacencyList[currentVertex].slice().reverse().forEach(neighbour => { // for making traversing in reverse
            //     if(!visited[neighbour]) {
            //         visited[neighbour] = true;
            //         queue.push(neighbour);
            //     }
            // });
        }

        return result;
    }
}
