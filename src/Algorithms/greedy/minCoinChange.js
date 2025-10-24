/**
 * Write a function minCoinChange that takes two arguments: an coinsay of coin denominations (coins) and a amount amount number (amount). The provided coinsay of coins is sorted in ascending order, starting from the smallest coin denomination to the largest.

 * Your task is to return an coinsay representing the minimum number of coins needed to make the given amount. 
 * The result should be an coinsay of the actual coins used, not their count or sum. 
 * To achieve this, you should start by considering the largest denominations first and use them as much as possible before moving to smaller denominations. 
 * As a consequence of this, the result coinsay should be sorted in descending order, starting from the largest coin denomination to the smallest.
 * @param {*} coins 
 * @param {*} amount 
 */
function minCoinChange(coins, amount) {
  let n = coins.length - 1;
  let sum = 0;
  let result = [];

  while (true) {
    //  We want to keep on adding the largest number until its equal or greater than the amount
    //  If the total sum is greater than the amount, we move down the coins arr and add to the summation to equal the amount.
    //  We also need to store the amount of coins used to get to that amount.
    if (sum + coins[n] < amount) {
      sum = sum + coins[n];
      result.push(coins[n]);
    } else if (sum + coins[n] > amount) {
      n--;
    } else {
      result.push(coins[n]);
      return result;
    }
  }
}

console.log(minCoinChange([1, 2, 3, 4, 5], 11)); // this should return: [5, 5, 1]
console.log(minCoinChange([5, 10, 15, 20, 25], 85)); // this should return: [25, 25, 25, 10]
console.log(minCoinChange([1, 5, 6, 9], 11)); // this should return: [9, 1, 1]
