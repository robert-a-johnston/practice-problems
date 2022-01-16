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
  // set two variables to store max value of sub arrays
  let tempMax = 0
  // this is set to smallest number possible and the
  // number returned
  let returnMax = Number.NEGATIVE_INFINITY
  // iterate over nms array
  for(let i = 0; i < nums.length; i++) {
    // sets tempMax to number
    tempMax = Math.max(nums[i], nums[i] + tempMax)
    // check to see if tempMax is greater than returnMax
    // if so set return value to tempMax
    if (tempMax > returnMax) {
      returnMax = tempMax
    }
  }
  return returnMax
}

let nums = [-2,1,-3,4,-1,2,1,-5,4]
let nums1 = [1]
let nums3 = [5,4,-1,7,8]
let num4 = [0]
let num5 = []
console.log(maxSubArray(nums))
console.log(maxSubArray(nums1))
console.log(maxSubArray(nums3))

