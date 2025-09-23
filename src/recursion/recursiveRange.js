// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 * @param {*} number
 */
function recursiveRange(number) {
    if(number === 0 ) return 0;

    return number + recursiveRange(number-1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
