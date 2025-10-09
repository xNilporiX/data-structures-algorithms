class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Pushes the newest value at the start of the list.
   * This is done for O(1) time.
   * We could have pushed at the end of the list as well, but since we are using singly linked list,
   * we have to traverse the list for popping.
   * @param {*} val
   */
  push(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;

    return this.size;
  }

  /**
   * Removes the most recent value from the start of the list.
   * This is done for O(1) time.
   * We could have pushed at the end of the list as well, but since we are using singly linked list,
   * we have to traverse the list for popping.
   * @returns
   */
  pop() {
    if(!this.first) return null;
    var lastNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = lastNode.next;
    }

    this.size--;

    return lastNode.val;
  }

  print() {
    var arr = [];
    var current = this.first;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
    return arr;
  }
}

var stack = new Stack();
 
stack.push(10);
stack.push(100);
stack.push(1000);
var removed = stack.pop();
console.log(removed) // 1000
stack.size // 2
stack.pop();
stack.pop();
stack.size // 0

// With Arrays
// var stack = [];

// stack.push("google");
// stack.push("instgram");
// stack.push("facebook");
// stack.push("youtube");

// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

// Another way to do it
// stack.unshift("google");
// stack.unshift("instgram");
// stack.unshift("facebook");
// stack.unshift("youtube");

// stack.shift();
// stack.shift();
// stack.shift();
// stack.shift();
