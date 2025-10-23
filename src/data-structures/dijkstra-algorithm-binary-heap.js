/**
 * A graph that has weights between two vertices.
 */
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adds a new vertex to the graph.
   * @param {*} vertex
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  /**
   * Adds a new weight to the connection between two vertices.
   * @param {*} vertex1
   * @param {*} vertex2
   * @param {*} weight
   */
  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  /**
   * Removes the connection between two vertices/nodes.
   * @param {*} vertex1
   * @param {*} vertex2
   */
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (neighbour) => neighbour.node !== vertex2
      );
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (neighbour) => neighbour.node !== vertex1
      );
    }
  }

  /**
   * Removes the node and all of its corresponding connections.
   * @param {*} vertex
   */
  removeVertex(vertex) {
    for (var item of this.adjacencyList[vertex]) {
      this.removeEdge(item.node, vertex);
    }

    delete this.adjacencyList[vertex];
  }

  /**
   * Uses Dijkstra's algorithm to find the shortest path.
   * @param {*} startVertex
   * @param {*} endVertex
   * @returns
   */
  DijkstraShortestPath(startVertex, endVertex) {
    //  To return the shortest path.
    let shortestPathArr = [];

    // Creating a distances object to keep track of the weight between two vertices.
    let distances = {};
    // Creating a previous object to track the previous vertex of the current vertex.
    // so if {C: B}, that means we got to C through B, or {D: C}, we got to D through C and we got to C through B.
    // We can always update this information as we find lower weights between connections.
    let previous = {};

    // We need a priority queue to determine the next path the algorithm should take and it should always be the one with lowest weight.
    var priorityQueue = new PriorityQueue();

    // Initially set all the vertices except for starting vertex to be infinity within the distance object.
    for (var vertex in this.adjacencyList) {
      // Set both the distances object and priority queue on the start vertex to 0,
      // otherwise the maximum value, inifinity
      if (vertex === startVertex) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }

      // Set the previous for all vertices to null.
      previous[vertex] = null;
    }

    //  As long as the queue is not empty.
    while (priorityQueue.values.length > 0) {
      let currentVertex = priorityQueue.dequeue().val;

      //  We break once the current vertex reaches the end vertex.
      if (currentVertex === endVertex) break;

      // Loop through the neighbours of the current vertex
      for (var neighbour of this.adjacencyList[currentVertex]) {
        //  As long as the neighbour node does not point to the start vertex.
        if (neighbour.node !== startVertex) {
          //  Find the total distance from starting vertex to neighbour vertex
          //  usuing the current distance/weight of the neighbour and its parent distance.
          let totalDistance = neighbour.weight + distances[currentVertex];

          // Only update if the total distance calculated is less than the currently stored distance object.
          if (totalDistance < distances[neighbour.node]) {
            // Update distance to the new distance.
            distances[neighbour.node] = totalDistance;
            // Previous node now points to the current vertex.
            previous[neighbour.node] = currentVertex;
            // Now queue node with a new priority using total distance of that node.
            priorityQueue.enqueue(neighbour.node, totalDistance);
          }
        }
      }
    }

    // Now we need to return the shortest path.
    // We start from the end vertex and work our way to the top.
    let shortestPathVertex = endVertex;
    shortestPathArr.push(shortestPathVertex);

    // As long as the shortestPathVertex is not null
    while (shortestPathVertex) {
      // We check the previous node that holds the current shortest path vertex.
      if (previous[shortestPathVertex])
        shortestPathArr.push(previous[shortestPathVertex]);
      shortestPathVertex = previous[shortestPathVertex];
    }

    // Finally return the distance alongside the shortest path, reversed(as we worked our way from end to top)
    return [distances[endVertex], shortestPathArr.reverse()];
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

/**
 * Implemented using min binary heap.
 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    var newNode = new Node(val, priority);

    if (this.values.length === 0) {
      this.values.push(newNode);
      return this;
    }

    //  Gets the index after the new element has been pushed.
    let index = this.values.push(newNode) - 1;

    //  Get the parent node index.
    let parentIndex = Math.floor((index - 1) / 2);

    // as long as the value pushed in is less than the parent, we bubble up.
    while (this.values[index]?.priority <= this.values[parentIndex]?.priority) {
      let parent = this.values[parentIndex];
      this.values[index] = parent;
      this.values[parentIndex] = newNode;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this;
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let idx = 0;
    let length = this.values.length;

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;

      let leftChild = this.values[leftIdx];
      let rightChild = this.values[rightIdx];
      let parent = this.values[idx];

      if (leftIdx < length && leftChild.priority < parent.priority)
        swapIdx = leftIdx;
      if (
        rightIdx < length &&
        rightChild.priority <
          (swapIdx === null ? parent.priority : leftChild.priority)
      )
        swapIdx = rightIdx;

      if (swapIdx === null) break;

      this.swap(idx, swapIdx);
      idx = swapIdx;
    }

    return min;
  }

  swap(first, second) {
    [this.values[first], this.values[second]] = [
      this.values[second],
      this.values[first],
    ];
  }
}

var g = new WeightedGraph();
// g.addEdge("A", "B", 4);
// g.addEdge("A", "C", 2);
// g.addEdge("B", "E", 3);
// g.addEdge("C", "D", 2);
// g.addEdge("C", "F", 4);
// g.addEdge("D", "E", 3);
// g.addEdge("D", "F", 1);
// g.addEdge("F", "E", 1);

// console.log(g.findShortestPath("A", "E"));

var g = new WeightedGraph();

g.addVertex("A");
g.addVertex("Z");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("H");
g.addVertex("Q");
g.addVertex("G");

g.addEdge("A", "Z", 7);
g.addEdge("A", "C", 8);

g.addEdge("Z", "Q", 2);

g.addEdge("C", "G", 4);

g.addEdge("D", "Q", 8);

g.addEdge("E", "H", 1);

g.addEdge("H", "Q", 3);

g.addEdge("Q", "C", 6);

g.addEdge("G", "Q", 9);

console.log(g.DijkstraShortestPath("A", "E")); // ["A", "Z", "Q", "H", "E"]
console.log(g.DijkstraShortestPath("A", "Q")); // ["A", "Z", "Q"]
console.log(g.DijkstraShortestPath("A", "G")); // ["A", "C", "G"]
console.log(g.DijkstraShortestPath("A", "D")); // ["A", "Z", "Q", "D"]
