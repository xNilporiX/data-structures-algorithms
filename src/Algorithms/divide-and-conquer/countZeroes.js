/**
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes,
 * which returns the number of zeroes in the array.
 * @param {*} array
 */
function countZeroes(array) {
//    We split the array in half to see if we find a zero in the middle. 
//    The goal is simple, once we find a zero, we store the index and keep moving to the left.
//  Once there is no 0, we get the index and deduct from array len

    let left = 0;
    let right = array.length - 1;
    let firstZeroIndex = -1;


    while(left <= right) {
        let mid = Math.floor((left+right)/2);

        if(array[mid] === 0){
            firstZeroIndex = mid;
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    if(firstZeroIndex === -1) return 0;

    return array.length - firstZeroIndex;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
