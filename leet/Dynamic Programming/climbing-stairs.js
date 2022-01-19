// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many 
// distinct ways can you climb to the top?

 /**
 * @param {number} n
 * @return {number}
 */

 // brute force takes to much time with large n
var climbStairs = function(n) {
  if(n < 0){
    // check for neg numbers
        return 0
    // check for 0
      } else if(n === 0){
        return 1
    // recursive call to climbStairs
      } else {
        return climbStairs(n -1) + climbStairs(n -2)
      }
};

// with memoization
const climbStairsMemo = function(n, memo = {}){
  
  if (n in memo) return memo[n]
  
  if(n < 0){
    // check for neg numbers
    return 0
    // check for 0
  } else if(n === 0){
    return 1
    // check for base cases
  } else if (n === 1 || n === 2 || n == 3){
    return n
  } else {
    // create memo to remember previous values
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    return memo[n]
  }
}
console.log(climbStairsMemo(2)) //2
console.log(climbStairsMemo(3))  //3
console.log(climbStairsMemo(6))