/**
 * Write a function called coinChange which accepts two parameters: an array of denominations and a value.
 * The function should return the number of ways you can obtain the value from the given collection of denominations.
 * You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.
 * 
 * Sadly, I didn't understand this problem properly and used AI help here :(
 * @param {*} coinChange
 * @param {*} amount
 */
function coinChange(coins, amount, index = 0, memo = {}) {
  const key = `${amount}-${index}`;
  if (key in memo) return memo[key];

  if (amount === 0) return 1;
  if (amount < 0 || index === coins.length) return 0;

  const sameCoin = coinChange(coins, amount - coins[index], index, memo);
  const differentCoin = coinChange(coins, amount, index + 1, memo);

  memo[key] = sameCoin + differentCoin;
  return memo[key];
}


const denominations = [1, 5, 10, 25];

// coinChange(denominations, 1); // 1
// coinChange(denominations, 2); // 1
// coinChange(denominations, 5); // 2
console.log(coinChange([1, 2], 3));

// console.log(coinChange(denominations, 10)); // 4
// coinChange(denominations, 25); // 13
// coinChange(denominations, 45); // 39
// coinChange(denominations, 100); // 242
// coinChange(denominations, 145); // 622
// coinChange(denominations, 1451); // 425663
// coinChange(denominations, 14511); // 409222339
