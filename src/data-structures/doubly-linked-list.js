class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Pushes a new node at the end of the list.
   * @param {*} val 
   * @returns 
   */
  push(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;

      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Removes the last item from the list.
   * @returns 
   */
  pop() {
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // get the popped node.
      var poppedNode = this.tail;
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;

      this.length--;

      return poppedNode;
    }
  }

  /**
   * Removes the first item from the list.
   * @returns 
   */
  shift() {
    if (this.length === 0) return undefined;
    var poppedHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedHead.next;
      poppedHead.next = null;
      this.head.previous = null;
    }
    this.length--;
    return poppedHead;
  }

  /**
   * Adds a new item at the start of the list.
   * @param {*} val 
   * @returns 
   */
  unshift(val) {
    var newHead = new Node(val);

    if (this.length === 0) {
      this.push(val);
    } else {
      this.head.previous = newHead;
      newHead.next = this.head;

      this.head = newHead;
      this.length++;
    }

    return this;
  }

  /**
   * Gets the node based on the index.
   * @param {*} index 
   * @returns 
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = null;

    if (index <= Math.floor(this.length / 2)) {
      current = this.head;
      while (current) {
        if (index === counter) return current;
        counter++;
        current = current.next;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;
      while (current) {
        if (index === counter) return current;
        counter--;
        current = current.previous;
      }
    }
  }

  /**
   * Inserts a new item based on the index of the list.
   * @param {*} index 
   * @param {*} val 
   * @returns 
   */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) !!this.unshift(val);
    if (index === this.length) !!this.push(val);

    var newNode = new Node(val);
    var foundNode = this.get(index);
    var prevNode = foundNode.previous;

    prevNode.next = newNode;
    newNode.previous = prevNode;
    newNode.next = foundNode;
    foundNode.previous = newNode;

    this.length++;
    return true;
  }

  /**
   * Removes the item from the list, based on the index.
   * @param {*} index 
   * @returns 
   */
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) this.shift(val);
    if (index === this.length - 1) this.pop(val);

    var poppedNode = this.get(index);
    var previousNode = poppedNode.previous;
    var nextNode = poppedNode.next;

    previousNode.next = nextNode;
    nextNode.previous = previousNode;

    this.length--;

    return poppedNode;
  }

  /**
   * Reverses the entire list.
   * @returns 
   */
  reverse() {
    if (!this.head || this.length <= 1) return this;

    var current = this.head;
    var temp = null;

    while (current) {
      temp = current.previous;
      current.previous = current.next;
      current.next = temp;

      current = current.previous;
    }

    if (temp) {
      this.tail = this.head;
      this.head = temp.previous;
    }

    return this;
  }

  /**
   * Updates the element on the list, based on the index.
   * @param {*} index 
   * @param {*} val 
   * @returns 
   */
  set(index, val) {
    const findNode = this.get(index);
    if (findNode === null) return false;

    findNode.val = val;
    return true;
  }

  /**
   * Prints the list.
   */
  print() {
    var current = this.head;
    var arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(
      "head -",
      arr[0],
      "tail -",
      arr[this.length - 1],
      "length -",
      this.length,
      "arr -",
      arr
    );
  }
}

const dll = new DoublyLinkedList();
// dll.push(1).push(2).push(3);
// console.log(dll.get(1));

dll.push(5).push(10).push(15).push(20);
// dll.get(0).val; // 5
// dll.get(1).val; // 10
// dll.get(2).val; // 15
dll.get(3).val; // 20
dll.get(4); // nul
dll.insert(1, 7);
dll.print();
dll.remove(1);
dll.print();
dll.reverse();
dll.print();
