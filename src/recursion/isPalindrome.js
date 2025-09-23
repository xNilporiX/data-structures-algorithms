
/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 * @param {*} string 
 */
function isPalindrome(string){
    // Here's the idea:
    //  We have a string - cat 
    //  we need to reverse the string - tac - see if it matches exactly char by char reversed. 
    //  If so, true, otherwise false;
    if(string.slice(-1) === string[0] && string.length <= 1) return true;
    if(string.slice(-1) !== string[0]) return false;

    return isPalindrome(string.substring(1, string.length-1))
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false