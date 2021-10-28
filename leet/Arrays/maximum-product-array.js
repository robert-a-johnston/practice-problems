// Given an integer array nums, find a contiguous non-empty 
// subarray within the array that has the largest product, 
// and return the product.

// It is guaranteed that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// I: array
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize
// the answer is guaranteed to fit in a 32 bit integer

// time complexity: 
// space complexity:  

// Objective: return the value of the sub-array with the largest product

// brute force sum every sub-array and save max value of each return the
// max value of all sub max values

// hint: kadane's algorithm

function maxProduct(nums) {
  let n = nums.length
  let lMax = nums[0]
  let gMax = nums[0]
  let min = nums[0] 

  for(let i = 1; i < n; i++){
    const temp = nums[i] * lMax

    lMax = Math.max(nums[i], temp, nums[i] * min)
    min = Math.min(nums[i], temp, nums[i] * min)
    gMax = Math.max(lMax, gMax)
  }
  return gMax
}


let nums = [2,3,-2,4]
let nums2 = [-2,0,-1]
console.log(maxProduct(nums))
console.log(maxProduct(nums2))