/**
 * Insertion Sort.
 * @param {*} arr
 * @returns
 */
function insertionSort(arr, callbackFn) {
  // The left side is always sorted. Thus we start from i=1;
  for (var i = 1; i < arr.length; i++) {
    // Compare currentVal value with previous element (sorted left side element).
    var currentVal = arr[i];
    // Inner Sorted loop
    // If currentVal is less than the sorted value on the left.
    if (typeof callbackFn !== "function") {
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        //  Shift the value on the left, to the right to make space for currentVal value.
        arr[j + 1] = arr[j];
      }
    } else {
      for (var j = i - 1; j >= 0 && callbackFn(arr[j], currentVal) > 0; j--) {
        //  Shift the value on the left, to the right to make space for currentVal value.
        arr[j + 1] = arr[j];
      }
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
insertionSort([1, 2, 3]); // [1, 2, 3]
insertionSort([]);

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

insertionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

console.log(insertionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
