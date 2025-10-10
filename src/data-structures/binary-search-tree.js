class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new value in the bst.
   * @param {*} value 
   * @returns 
   */
  insert(value) {
    var newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    var current = this.root;

    while (current) {
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        return undefined;
      }
    }
  }

  /**
   * Finds the node within the BST.
   * @param {} value 
   * @returns 
   */
  find(value) {
    // If there is no root, return undefined.
    if (!this.root) return undefined;

    // Otherwise, we check all the values(including the root) present in the tree.
    var current = this.root;
    while (current) {
      // If there is a match, return the value;
      if (current.value === value) {
        return current;
      }
      // If the value is lower than the root, move left of the root
      // and iteratively check both left and right nodes.
      else if (value < current.value) {
        current = current.left;
      }
      // If the value is greater than the root, move right of the root
      // and iteratively check both left and right nodes.
      else {
        current = current.right;
      }
    }

    return undefined;
  }

  /**
   * Removes the node from the BST and adjust the children nodes (if needed).
   * @param {*} value 
   * @returns 
   */
  remove(value) {
    if (!this.root) return undefined;
    // Otherwise, we check all the values(including the root) present in the tree.
    var current = this.root;
    var parentNode = null;
    var removedNode = null;

    while (current) {
      parentNode = current;

      if (value < current.value) {
        parentNode = current;
        current = current.left;
      } else if (value > current.value) {
        parentNode = current;
        current = current.right;
      }
      if (current.value === value) {
        // First case: No children
        if (!current.left && !current.right) {
          if (current === this.root) {
            this.root = null;
          } else if (parentNode.left === current) {
            parentNode.left = null;
          } else {
            parentNode.right = null;
          }
        }

        //  Second case: Only 1 child.
        else if (!current.left || !current.right) {
          const child = current.left || current.right;
          if (current === this.root) this.root = child;
          else if (parentNode.left === current) parentNode.left = child;
          else parentNode.right = child;
        }

        // Third case: Has two child.
        else {
          // successorParent will be replaced by a new successor
          let successorParent = current;
          let successor = current.right;

          // We need to find the minimum node within right side of the parent node.
          while (successor.left) {
            successorParent = successor;
            successor = successor.left;
          }

          // Now replace the current node(the one we want to replace) with the new successor.
          current.value = successor.value;

          // Remove sucessor node as the value been moved to new parent above.
          if (successorParent.left === successor) {
            successorParent.left = successor.right;
          } else {
            successorParent.right = successor.right;
          }
        }

        removedNode = current;
        return removedNode;
      }
    }
  }

  /**
   * Finds the second largest number in the BST.
   * @returns 
   */
  findSecondLargest() {
    if (!this.root) return undefined;
    if (!this.root.left || !this.root.right) return undefined;
    var current = this.root;
    var parent = null;

    while (current.right) {
      parent = current;
      current = current.right;
    }

    return parent.value;
  }

  /**
   * Checks if the tree is balanced or not, by calculating the depth of the tree from both sides of the root(right and left).
   * @returns 
   */
  isBalanced() {
    if (!this.root) return false;

    var current = this.root;
    var rightLength = 0;
    var leftLength = 0;

    while (current.right) {
      rightLength++;
      current = current.right;
    }

    while (current.left) {
      leftLength++;
      current = current.left;
    }

    console.log(Math.abs(rightLength - leftLength) <= 1);
    return Math.abs(rightLength - leftLength) <= 1;
  }
}

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);
// binarySearchTree.remove(50);
// console.log(binarySearchTree.root.right.value); // 20
// console.log(binarySearchTree.root.right.right); // null

// binarySearchTree.remove(5);
// console.log(binarySearchTree.root.left.left.value) // 1
// console.log(binarySearchTree.root.left.left.right) // null

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);

// binarySearchTree.remove(1);
// console.log(binarySearchTree.root.left.left.value); // 5
// console.log(binarySearchTree.root.left.left.left); // null
// console.log(binarySearchTree.root.left.left.right); // null
// console.log(binarySearchTree.findSecondLargest());
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.isBalanced(); // true
 
var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
binarySearchTree2.isBalanced(); // true
binarySearchTree2.insert(6);
binarySearchTree2.isBalanced(); // true
binarySearchTree2.insert(7);
binarySearchTree2.isBalanced(); // false
