// staircase with n steps
// can go up 1, 2 or 3 steps
// count how many ways to climb stairs

function countWays(n, memo={}){

  if (n in memo) return memo[n]
  // check for negative numbers
  if(n < 0){
    return 0
    // check for 0
  } else if(n === 0){
    return 1
  } else {
    // create memo to remember previous values
    memo[n] = countWays(n -1, memo) + countWays(n -2, memo) + countWays(n - 3, memo)
    // return the memo for recursion
    return memo[n]
  }
}


console.log(countWays(6))
