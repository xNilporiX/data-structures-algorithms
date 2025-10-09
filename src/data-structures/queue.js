class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;

    return this.size;
  }

  dequeue() {
    const first = this.first;
    if(this.size === 0) return null;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return first.val;
  }

  print() {
    var arr = [];
    var current = this.first;

    while (current) {
      arr.enqueue(current.val);
      current = current.next;
    }

    console.log(arr);
    return arr;
  }
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();
q.dequeue();
q.print();
// Easier way to do this with array
// var queue = [];

// queue.push(1);
// queue.push(2);
// queue.push(3);
// console.log(queue);
// queue.shift();
// console.log(queue);
