// A robot is located at the top-left corner 
// of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or 
// right at any point in time. The robot is 
// trying to reach the bottom-right corner of 
// the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

var uniquePaths = function(m, n) {
 // create table fill all fields with 0
 const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
 table[1][1] = 1
 

 for(let i = 0; i <= m; i++) {
   for(let j = 0; j <= n; j++) {
     const current = table[i][j]
     if(j + 1 <= n) table[i][j + 1] += current
     if(i + 1 <= m) table[i + 1][j] += current
   }
 }
 
 return table[m][n]
}

var uniquePathsM = function(m, n,  memo = {}) {
  const key = m  + ',' + n
  // are arguments in memo?
  if (key in memo) return memo[key]
  if(m === 1 && n === 1) return 1
  if(m === 0 || n === 0) return 0

  
  memo[key] = uniquePathsM(m - 1, n, memo) + uniquePathsM(m, n - 1, memo)
  return memo[key]
}

console.log(uniquePathsM(3, 2))  // 3
console.log(uniquePathsM(7, 3))  // 28
console.log(uniquePathsM(19, 19))
console.log(uniquePaths(3, 3)) // 6
// console.log(uniquePaths(0, 0)) // 0
console.log(uniquePaths(1, 5))  // 1
console.log(uniquePaths(32, 1)) // 1