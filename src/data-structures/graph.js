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
}

var g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Adelaide");
g.addEdge("Tokyo", "Adelaide");
g.addEdge("Melbourne", "Adelaide");
g.addEdge("Tokyo", "Melbourne");
g.addEdge("New York", "Melbourne");
g.addEdge("New York", "Adelaide");

console.log(g.adjacencyList);

g.removeEdge("Melbourne", "Adelaide");

console.log(g.adjacencyList);
g.removeVertex("Adelaide");
console.log(g.adjacencyList);
