/**
 * Fibonacci using memoixstion i.e storing the result of sub problems and reusing them.
 * @param {*} n
 * @param {*} memo
 * @returns
 */
function fibonacciMemoization(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  let result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = result;
  return memo[n];
}

/**
 * Fibonacci using tabulation i.e starting from the bottom to the top and storing the result in a table.
 * @param {*} n
 * @returns
 */
function fibonacciTabulation(n) {
  if (n <= 2) return 1;
  var table = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}
console.log(fibonacciTabulation(200));
