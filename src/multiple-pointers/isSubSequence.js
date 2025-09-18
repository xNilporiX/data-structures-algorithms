/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string
 * form a subsequence of the characters in the second string. 
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
 * without their order changing.
 * @param {*} checksum 
 * @param {*} message 
 * @returns 
 */
function isSubsequence(checksum, message) {
  // Create a pointer at index 0 and index 1 and compare with checksum and message to see if the checksum letters exist in order.
  let chksmP = 0;
  let pointer = 0;
  // Loop through the message to check if the checksum exist within the messsage.
  while (pointer < message.length) {
    if (checksum[chksmP] === message[pointer]) {
      chksmP++;
    }
    pointer++;
  }

  return chksmP === checksum.length;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
