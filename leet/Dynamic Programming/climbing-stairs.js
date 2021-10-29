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

function climbStairs(n) {
  if(n < 0){
    return 0
  } else if(n === 0){
    return 1
  } else {
    return climbStairs(n -1) + climbStairs(n -2)
  }
}

let n = 45
console.log(climbStairs(n))