// Given an integer n, return an array ans of length n + 1 such 
// that for each i (0 <= i <= n), ans[i] is the number 
// of 1's in the binary representation of i.

// I: integer
// O: array
// EDGE CASE: 
// CONSTRAINTS: optimize

// time complexity: O(n^2), O(n)
// space complexity:  

// Objective: 

function countBits(n) {
  let ans = []
  let count = 0

  for(let i = 0; i <= n; i++) {
    const biNum = i.toString(2).split('')
    for(let j = 0; j <= n; j++){
      if(biNum[j] === '1'){
        count++
      }
    }
    ans.push(count)
    count = 0
  }
  return ans
}

function countBits2(n) {
  let ans = new Array(n + 1)
  if(n === 0) return [0]
  ans[0] = 0
  ans[1] = 1
  
  for(let i = 2; i <= n; i++) {
    console.log(ans[Math.floor(i/2)])
    ans[i] = ans[Math.floor(i/2)] + (i % 2 ===0 ? 0 : 1)
  }
  console.log(ans) 
}
let n = 1
console.log(countBits(n))
countBits2(n)