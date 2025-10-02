/**
 * Merge Sort
 *
 * Idea:
 * 1. Divide the array into halves recursively until each subarray has only one element.
 * 2. A single-element array is already sorted by definition.
 * 3. Merge two sorted subarrays into one sorted array.
 * 4. Repeat merging until the entire array is sorted.
 *
 * This algorithm follows the "divide and conquer" strategy.
 */
function mergeSort(arr, callbackFn) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), callbackFn);
  let right = mergeSort(arr.slice(mid), callbackFn);

  return merge(left, right, callbackFn);
}

function merge(arr1, arr2, callbackFn) {
  let sortedArray = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (typeof callbackFn !== "function") {
      if (arr1[p1] <= arr2[p2]) {
        sortedArray.push(arr1[p1]);
        p1++;
      } else {
        sortedArray.push(arr2[p2]);
        p2++;
      }
    } else {
      if (callbackFn(arr1[p1], arr2[p2]) <= 0) {
        sortedArray.push(arr1[p1]);
        p1++;
      } else {
        sortedArray.push(arr2[p2]);
        p2++;
      }
    }
  }

  while (p1 < arr1.length) {
    sortedArray.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    sortedArray.push(arr2[p2]);
    p2++;
  }

  return sortedArray;
}

console.log(mergeSort([10, 24, 76, 73]));
// var arr1 = [1, 3, 4, 5];
// var arr2 = [2, 4, 6, 8];
// console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]

// arr1; // [1,3,4,5];
// arr2; // [2,4,6,8];F

// var arr3 = [-2, -1, 0, 4, 5, 6];
// var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

// console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

// var arr5 = [3, 4, 5];
// var arr6 = [1, 2];

// console.log(merge(arr5, arr6)); // [1,2,3,4,5]

// var names = ["Bob", "Ethel", "Christine"];
// var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

// function stringLengthComparator(str1, str2) {
//   return str1.length - str2.length;
// }

// console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]

console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
console.log(mergeSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
