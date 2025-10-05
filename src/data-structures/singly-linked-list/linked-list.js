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

  set(index, val){
    var node = this.get(index);
    if(!node) return false;
    
    node.val = val;
    return true;
  }

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

  print() {
    var current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

// console.log(list.shift());
console.log(list.unshift(0));
console.log(list.print());
console.log(list.get(1));
console.log(list.set(1, 99));
console.log(list.set(-5, -999));

console.log(list.print());

