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

function countBitsBF(n) {
  // Returned array
  let ans = []
  // Counter
  let count = 0

  // Iterate over all numbers until reach n
  for(let i = 0; i <= n; i++) {
    // convert number to binary amd split into array
    const biNum = i.toString(2).split('')
    // Iterate over all numbers until reach n
    for(let j = 0; j <= n; j++){
      // If the number at index j of array biNum = 1 add 1 to count
      if(biNum[j] === '1'){
        count++
      }
    }
    // Push to count array
    ans.push(count)
    // reset count for next number
    count = 0
  }
  return ans
}

function countBits2(n) {
  // Create new array 1 longer than n
  let ans = new Array(n + 1)
  // outlier case
  if(n === 0) return [0]
  // If number > 0 both must values must exist in the array 
  ans[0] = 0
  ans[1] = 1
  
  // Iterate through all numbers starting at 2
  // since 0 and 1 have already been accounted for
  for(let i = 2; i <= n; i++) {
    // Insert value for each element
    // Divide i by 2 and if i is divisible by 2 add one
    ans[i] = ans[Math.floor(i/2)] + (i % 2 === 0 ? 0 : 1)
  }
  return ans
   
}


let n = 5
console.log(countBitsBF(n))
console.log(countBits2(n))