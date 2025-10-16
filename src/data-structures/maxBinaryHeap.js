class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * We are creating the array to store the binary heap.
   * Once we push the new value into the array and as we are using an array to represent the binary heap.
   *
   * we need to bubble the last element that has been pushed to be compared to its parent (index - 1)/2 and move up if greater.
   * @param {*} value
   * @returns
   */
  insert(value) {
    //  Gets the index after the new element has been pushed.
    let index = this.values.push(value) - 1;

    //  Get the parent node index.
    let parentIndex = Math.floor((index - 1) / 2);

    // as long as the value pushed in is greater than the parent, we bubble up.
    while (this.values[parentIndex] <= this.values[index]) {
      let parent = this.values[parentIndex];
      this.values[index] = parent;
      this.values[parentIndex] = value;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this;
  }

  /**
   * Extracts the maximum number from the tree and replace with the last node added.
   * Then balance the tree to fulfill the condition.
   * @returns 
   */
  extractMax() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    // Step 1: store max
    const max = this.values[0];

    //  remove the last element in the binary heap(array)
    let lastNode = this.values.pop();

    // Initialise the first element to have the popped node.
    this.values[0] = lastNode;

    // Now we need to trickle down the replaced node at the root by comparing with its children.
    let parentIdx = 0;
    //  We get the length after popped node.
    let length = this.values.length;

    while (true) {
      // First child -> 2n+1
      let leftIdx = 2 * parentIdx + 1;
      // Second child -> 2n+2
      let rightIdx = 2 * parentIdx + 2;
      
      // We only swap when we need to
      let swapIdx = null;
      
      // Left child -> LeftIdx 
      let leftChild = this.values[leftIdx];
      
      // Right child -> rightIdx 
      let rightChild = this.values[rightIdx];
      
      // Parent
      let parent = this.values[parentIdx];

      // If leftindex is within bounds
      // and
      // left child is greater than the parent, set swap index to left child.
      if(leftIdx < length && leftChild > parent) swapIdx = leftIdx;

      // If rightindex is within bounds
      // and
      // right child is greater than (if swapIdx is null, that means left child is less than the parent), 
      // If swap is null, set to parent, otherwise compare with left child.
      if(rightIdx < length && rightChild > (swapIdx === null ? parent: leftChild)) swapIdx = rightIdx;

      // if there is nothing to swap, break out of the loop,
      if(swapIdx === null) break;

      this.swap(parentIdx, swapIdx);
      
      //  After successful swap, set parentIdx to swapIdx for further comparisons down the nodes.
      parentIdx = swapIdx;
    }

    return max;
  }

  swap(first, second) {
    [this.values[first], this.values[second]] = [
      this.values[second],
      this.values[first],
    ];
  }
}
var binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);
binaryHeap.extractMax();
console.log(binaryHeap.values[0]); // 5

console.log(binaryHeap.values); // [5,4,2,1,3])

binaryHeap.extractMax();
console.log(binaryHeap.values); // [4,3,2,1])

binaryHeap.extractMax();
console.log(binaryHeap.values); // [3,1,2])
