/**
 * Same Bubble Sort but now with callback functions.
 * @param {*} arr
 * @param {*} callBackFn
 * @returns
 */
function bubbleSortFn(arr, callBackFn) {
  let temp = 0;
  // We can optimise this even further, if the array is already sorted while looping, we can break.
  let noSwaps = false;
  for (var i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i; j++) {
      let shouldSwap = false;

      if (typeof callBackFn !== "function") {
        // default
        shouldSwap = arr[j] > arr[j + 1];
      } else {
        shouldSwap = callBackFn(arr[j], arr[j + 1]) > 0;
      }

      if (shouldSwap) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(bubbleSortFn(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(bubbleSortFn(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

console.log(bubbleSortFn(moarKittyData, oldestToYoungest)); // sorted by age in descending order
