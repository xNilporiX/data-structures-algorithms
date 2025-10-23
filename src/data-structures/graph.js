/**
 * UnDirected Graph using adjacencyList.
 */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adds a new node/vertex to the list.
   * @param {*} vertex
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  /**
   * Adds a new connection between two vertices/nodes.
   * @param {*} vertex1
   * @param {*} vertex2
   */
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  /**
   * Removes the connection between two vertices/nodes.
   * @param {*} vertex1
   * @param {*} vertex2
   */
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (item) => item !== vertex2
      );
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (item) => item !== vertex1
      );
    }
  }

  /**
   * Removes the node and all of its corresponding connections.
   * @param {*} vertex
   */
  removeVertex(vertex) {
    for (var item of this.adjacencyList[vertex]) {
      this.removeEdge(item, vertex);
    }

    delete this.adjacencyList[vertex];
  }

  /**
   * Explore as far as possible down the branch before backtracking.
   * @param {*} startingVertex
   * @returns
   */
  depthFirstRecursive(startingVertex) {
    // result array to show the traversed path.
    let results = [];

    //  A visited object to keep track of items visited.
    let visited = {};
    let adjacencyList = this.adjacencyList;

    dfs(startingVertex);

    function dfs(vertex) {
      // If the vertex is empty, return.
      if (!vertex) return;

      // Visited the node.
      visited[vertex] = true;

      // Record the result
      results.push(vertex);

      // For each of the vertex, find the neighbouring vertices.
      // If the neighbours have not been visited, call dfs
      for (let neighbour of adjacencyList[vertex]) {
        if (!visited[neighbour]) dfs(neighbour);
      }
    }
    return results;
  }

  /**
   * Depth First using iterative loop.
   * @param {*} startingVertex
   * @returns
   */
  depthFirstIterative(startingVertex) {
    // A stack to keep track of the vertex.
    let stack = [startingVertex];
    //  An array to store results.
    let results = [];

    //  An object to check if we have visited that vertex.
    let visited = {};

    while (stack.length) {
      let currentVertex = stack.pop();

      // If thre current vertex has not been visited, store the result and mark it as visited.
      if (!visited[currentVertex]) {
        results.push(currentVertex);
        visited[currentVertex] = true;
      }

      for (let neighbour of this.adjacencyList[currentVertex]) {
        if (!visited[neighbour]) stack.push(neighbour);
      }
    }

    return results;
  }

  /**
   * Bread first Traversal of the graph.
   * @param {*} startingVertex 
   * @returns 
   */
  breathFirstIterative(startingVertex) {
    //  Create a queue and initialise it with starting vertex.
    let queue = [startingVertex];
    // Store the result and mark the vertex as visited.
    let result = [];
    let visited = {};

    // mark the starting vertex as visited before looping.
    visited[startingVertex] = true;

    while (queue.length) {
      // Pop from the start of the queue and push it to results array.
      let currentVertex = queue.shift();
      result.push(currentVertex);

      for (var neighbour of this.adjacencyList[currentVertex]) {
        // If the neighbour has not been visited already, push to result
        // Then push to queue for its neighbour
        // Then mark the neighbour node as true.
        if (!visited[neighbour]) {
          queue.push(neighbour);
          visited[neighbour] = true;
        }
      }
    }

    return result;
  }
}

var g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// console.log(g.adjacencyList);

console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));
console.log(g.breathFirstIterative("A"));
