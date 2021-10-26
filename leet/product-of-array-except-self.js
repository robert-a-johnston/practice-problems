// Given an integer array nums, return an array 
// answer such that answer[i] is equal to the 
// product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is 
// guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) 
// time and without using the division operation.

// I: array
// O: array
// EDGE CASE: 
// CONSTRAINTS: optimize, O(n) time, no division
// the product of any prefix or suffix of nums is guaranteed
// to fit in a 32 bit integer

// time complexity: 
// space complexity:  

// Objective: return array of answers where you multiply all numbers 
// to the left and to the right of a specific number in the array

function productExceptSelf(nums) {

  let answer = []
  let leftAnswer = []
  let rightAnswer = []

  leftAnswer[0] = 1
  for(let i = 1; i < nums.length; i++) {
    leftAnswer[i] = leftAnswer[i - 1] * nums[i -1]
    // console.log('an, left, nums =', leftAnswer[i], leftAnswer[i - 1], nums[i -1])
  }

  rightAnswer[nums.length - 1] = 1
  for(let i = nums.length - 2; i >= 0; i--) {
    rightAnswer[i] = rightAnswer[i + 1] * nums[i + 1]
    console.log('an, right, nums =', rightAnswer[i], rightAnswer[i - 1], nums[i -1])
  }

  for(let i = 0; i < nums.length; i++) {
    answer[i] = leftAnswer[i] * rightAnswer[i]
  }
    return answer
}

let nums = [1,2,3,4]
// Output: [24,12,8,6]
const nums2 = [-1,1,0,-3,3]
productExceptSelf(nums)
productExceptSelf(nums2)