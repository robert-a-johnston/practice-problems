// A robot is located at the top-left corner of a m x n 
// grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any 
// point in time. The robot is trying to reach the bottom-right 
// corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?
// time complex O(m * n)

var uniquePaths = function(m, n, memo = {}) {
  // set key in memo
  const key = m + ',' + n
  // check if key in memo
  if (key in memo) return memo[key]
  // base cases
  if(m === 0 || n === 0) return 1
  if(m === 1 || n === 1) return 1
  // set memo[key]
  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n -1, memo)
  return memo[key]
} 

const m = 18
const n = 18

console.log(uniquePaths(0, 0))
console.log(uniquePaths(2, 3))
console.log(uniquePaths(3, 2))
console.log(uniquePaths(3, 3))
console.log('var ', uniquePaths(m, n))