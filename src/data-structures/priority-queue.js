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

var pq = new PriorityQueue();

pq.enqueue("common cold", 5)
  .enqueue("gunshot wound", 1)
  .enqueue("high fever", 4)
  .enqueue("broken arm", 2)
  .enqueue("glass in foot", 3);
console.log(pq.values);
pq.dequeue();
console.log(pq.values);

export default PriorityQueue;
