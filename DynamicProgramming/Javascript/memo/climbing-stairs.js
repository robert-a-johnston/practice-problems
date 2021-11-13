// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct 
// ways can you climb to the top?

// I: string of binary numbers
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize

// time complexity: O(n)
// space complexity:  

// Objective: return decimal string of reversed number

// function climbStairs(n) {
//   if(n < 0){
//     return 0
//   } else if(n === 0){
//     return 1
//   } else {
//     return climbStairs(n -1) + climbStairs(n -2)
//   }
// }

function climbStairs(n, memo = {}) {
  console.log('memo ', memo)
  if (n in memo) return memo[n]
  
  if(n < 0){
    return 0
  } else if(n === 0){
    return 1
  } else if (n === 1 || n === 2 || n == 3){
    return n
  } else {
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    return memo[n]
  }
}
let n = 6
console.log(climbStairs(n))