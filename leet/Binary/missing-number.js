// Given an array nums containing n distinct numbers 
// in the range [0, n], return the only number in the 
// range that is missing from the array.

// I: array
// O: integer
// EDGE CASE: array is 0 or 1 or -1, array missing number from front or back
// CONSTRAINTS: optimize
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

// time complexity: O(n^2)
// space complexity:  

// Objective: return missing number from set of numbers

function missingNumber(nums) {
  // Calculate the expected sum of numbers based on length of array
  const sumExpected = (nums.length * (nums.length + 1)) / 2
  // Calculate the actual sum of the numbers
  const sumActual = nums.reduce((a, b) => a + b)
  // Subtract the actual sum from the expected sum
  // this leaves the number missing
  return sumExpected - sumActual
}

let nums = [1, 2, 3, 4, 6]
console.log(missingNumber(nums))