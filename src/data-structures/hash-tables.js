/**
 * HashTable class.
 * Example: Objects/Maps in JS
 */
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  /**
   * A simple hash function.
   * Obviously we should use ones that is trusted, used widely instead of this severly simple hash function.
   * -> It needs to distribute values evenly, minimise collisions.
   * -> Has to be fast.
   * @param {*} key
   * @returns
   */
  _hash(key) {
    let total = 0;

    // Weirdly enough, prime numbers make collisions less frequent.
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /**
   * Sets a new key-val pair.
   * We are using separate chaining to handle collisions.
   * @param {*} key
   * @param {*} value
   */
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  /**
   * Retrieves the value associated with the key.
   * @param {*} key
   * @returns
   */
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (var i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  /**
   * Returns all the keys in the hashmap in an array.
   * @returns
   */
  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }

    return keys;
  }

  /**
   * Returns all the unique values in the hashmap in an array.
   * @returns
   */
  values() {
    let valueSet = new Set();
    let valueArray = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        valueSet.add(this.keyMap[i][0][1]);
      }
    }

    valueArray = Array.from(valueSet);
    return valueArray;
  }
}

var ht = new HashTable();

ht.set("wowwwd", "#1234");
ht.set("gtesds", "#5678");
ht.set("blue", "#5678");

// ht._hash("wowwwd");
// ht._hash("gtesds");
// ht._hash("sfsfs1");
// console.log(ht.keyMap.at(8));
// console.log(ht.keyMap.at(42));

// console.log(ht.get("wowwwd"));
// console.log(ht.get("blue"));
ht.keys();
console.log(ht.values());
