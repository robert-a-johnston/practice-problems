// Given an integer array nums, find the contiguous subarray 
// (containing at least one number) which has the largest sum 
// and return its sum.

// I: array
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize

// time complexity: O(n)
// space complexity:  

// Objective: return array of answers where you multiply all numbers 
// to the left and to the right of a specific number in the array

// hint: kadane's algorithm

function maxSubArray(nums) {
  let n = nums.length
  let lm = 0
  let gm = Number.NEGATIVE_INFINITY

  for(let i = 0; i < n; i++){
    lm = Math.max(nums[i], nums[i] + lm)
    if (lm > gm){
      gm = lm
    }
  }
  return gm
}

let nums = [-2,1,-3,4,-1,2,1,-5,4]
let nums1 = [1]
let nums3 = [5,4,-1,7,8]
let num4 = [0]
let num5 = []
console.log(maxSubArray(nums))
console.log(maxSubArray(nums1))
console.log(maxSubArray(nums3))

