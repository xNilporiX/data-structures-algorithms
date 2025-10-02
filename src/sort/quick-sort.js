/**
 * Quick Sort.
 *
 * The idea is:
 * 1. We will find a pivot within the array(usually the first element)
 * 2. Ensure that pivot is in the right place/index within the array.
 * 3. All the elements regardless of order as long as its less than the pivot, should stay left
 * 4. All the elements regardless of order as long as its more than the pivot, should stay right
 * 5. Then we recursively call the quicksort function by passing in the updated pivot on smaller subarray.
 *
 * @param {*} arr
 * @param {*} left
 * @param {*} right
 * @returns
 */
function quickSort(arr, comparatorFn, left = 0, right = arr.length - 1) {
  if (left < right) {
    var pivotIndex = pivot(arr, comparatorFn, left, right);
    // left
    quickSort(arr, comparatorFn, left, pivotIndex - 1);

    // right
    quickSort(arr, comparatorFn, pivotIndex + 1, right);
  }

  return arr;
}

function pivot(arr, comparatorFn, startIndex = 0, endIndex = arr.length - 1) {
  //    The pivot is set to the starting index of the first element.
  let pivot = arr[startIndex];
  // The swap index stores the initial startIndex.
  let swapIndex = startIndex;

  var i = startIndex + 1;

  while (i <= endIndex) {
    //  If the element is less than the pivot, increment the pivot index, otherwise skip.
    if (typeof comparatorFn !== "function") {
      if (arr[i] < pivot) {
        swapIndex++;

        //   Swap the values with pivot Index and current value.
        swap(arr, i, swapIndex);
      }
    } else {
      if (comparatorFn(pivot, arr[i]) > 0) {
        swapIndex++;

        //   Swap the values with pivot Index and current value.
        swap(arr, i, swapIndex);
      }
    }
    i++;
  }

  swap(arr, startIndex, swapIndex);

  return swapIndex;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
// var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
// var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
// function strLength(a, b) {
//   return a.length - b.length
// }
 
// // console.log(pivot(arr1)); // 3
// // console.log(pivot(arr2)); // 4
// console.log(pivot(arr3, strLength)); // 1
 
// arr1.slice(0, 3).sort((a, b) => a - b); // [2, 3, 4]
// arr1.slice(3).sort((a, b) => a - b); // [5, 7, 8, 9, 10, 20]
 
// arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
// arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]
 
// arr3.slice(0, 1).sort(strLength); // ["Blue"]
// arr3.slice(1).sort(strLength); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]

console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(quickSort([1, 2, 3])); // [1, 2, 3]
console.log(quickSort([]));
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
console.log(quickSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
 
console.log(quickSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order