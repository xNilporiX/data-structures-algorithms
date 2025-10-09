class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Creates a new node and pushes it at the end of the list.
   * @param {*} val
   * @returns
   */
  push(val) {
    // Create a new node and store the value.
    var newNode = new Node(val);

    // If head is null, set both head and tail to the new node.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //   Update that last node to point to the new node.
      this.tail.next = newNode;

      //   Now set the new node to the tail.
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Removes the last item from the list
   * @returns
   */
  pop() {
    // if the list/head is empty, return undefined.
    if (!this.head) return undefined;

    // Traverse the list.
    var current = this.head;

    // To store the 2nd to last node.
    var newTail = current;

    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }

    //  Set tail to previous node and point to null.
    this.tail = newTail;
    this.tail.next = null;

    // Decrease the length
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  /**
   * Gets the item from the list using an index.
   * @param {*} index
   * @returns
   */
  get(index) {
    // if index is out of bounds, return null
    if (index < 0 || index >= this.length) return null;

    var counter = 0;
    var current = this.head;
    //  Increment the counter to create a fake index .
    while (current) {
      if (counter === index) return current;
      current = current.next;
      counter++;
    }
    return null;
  }

  /**
   * Updates a node on the list, based on the index.
   * @param {*} index
   * @param {*} val
   * @returns
   */
  set(index, val) {
    var node = this.get(index);
    if (!node) return false;

    node.val = val;
    return true;
  }

  /**
   * Inserts a new node in the list at a given index.
   * @param {*} index
   * @param {*} val
   * @returns
   */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    // If we are inserting at the end.
    if (index === this.length) return !!this.push(val);

    // If we are inserting at the start.
    if (index === 0) return !!this.unshift(val);

    // Get the previous node before chosen index.
    const previousNodeBeforeIndex = this.get(index - 1);

    // Get the node at chosen index.
    const nodeAtIndex = previousNodeBeforeIndex.next;

    // Create the new node.
    var newNode = new Node(val);

    // Previous node now points to the new node.
    previousNodeBeforeIndex.next = newNode;

    // new node now points to the initial chosen node.
    newNode.next = nodeAtIndex;

    // Increment the length.
    this.length++;

    return true;
  }

  /**
   * Removes the item from the list from a given index.
   * @param {*} index
   * @returns
   */
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    // If we are removing from the end.
    if (index === this.length - 1) return this.pop(val);

    // If we are removing at the start.
    if (index === 0) return this.shift();

    // Get the previous node.
    const previousNode = this.get(index - 1);

    //  The previous node points to the node we want to remove.
    const nodeToRemove = previousNode.next;

    //  The node to remove contains the pointer to the node we want to connect.
    //  Sever the connection with nodeToRemove.
    // Previous node now pointing to the node we want to connect.
    previousNode.next = nodeToRemove.next;
    this.length--;

    return nodeToRemove;
  }

  /**
   * Reverses the list.
   * @returns
   */
  reverse() {
    //  Keep the original head. So that we can reverse it later on.
    var origHead = this.head;

    // Initially set previous to null;
    var prev = null;
    var next;

    // Current points to the head.
    var current = this.head;

    // While current is not null.
    while (current) {
      // Temporarily Store the current's next node on next variable.
      next = current.next;

      // Set the current's next node to previous node.
      current.next = prev;

      //  Then set previous to the current node.
      prev = current;

      //  Increment to the next node.
      current = next;
    }

    // Swap the head and tail.
    this.head = prev;
    this.tail = origHead;

    return this;
  }

  /**
   * removes the element from the begining of the list.
   * @returns
   */
  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;

    // The next of head points to the new head.
    var newHead = oldHead.next;
    this.head = newHead;
    this.length--;

    if (this.length === 0) this.tail = null;

    return oldHead.val;
  }

  /**
   * Adds a new element from the begining of the list.
   * @param {*} val
   * @returns
   */
  unshift(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Prints the list.
   */
  print() {
    var arr = [];
    var current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  /**
   * rotates the list based on the value passed in.
   * [1,2,3,4,5]
   * rotate(2)
   * [3, 4, 5, 1, 2]
   * @param {*} num
   * @returns
   */
  rotate(num) {
    if (this.length <= 1) return this;

    // rotation count for both positive and negative
    let index = ((num % this.length) + this.length) % this.length;

    if (index === 0) return this;

    // Find new tail and head
    const newTail = this.get(index - 1);
    const newHead = newTail.next;

    // the og tail points to the og head, to keep the connection.
    this.tail.next = this.head;
    this.head = newHead;
    newTail.next = null;
    this.tail = newTail;

    return this;
  }
}

// var singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25); // 5, 10, 15, 20, 25
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 25;

// singlyLinkedList.rotate(3);
// singlyLinkedList.head.val; // 20
// singlyLinkedList.head.next.val; // 25
// singlyLinkedList.head.next.next.val; // 5
// singlyLinkedList.head.next.next.next.val; // 10
// singlyLinkedList.head.next.next.next.next.val; // 15
// singlyLinkedList.tail.val; // 15
// singlyLinkedList.tail.next; // null
// singlyLinkedList.print(); // [ 20, 25, 5, 10, 15 ]

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next; // null
singlyLinkedList.print();
