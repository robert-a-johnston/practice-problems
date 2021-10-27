// I: array
// O: array
// EDGE CASE: array has one item
// CONSTRAINTS: O(log(n))

// time complexity: O(log(n))
// space complexity:  

// Objective: return an sorted array from min to max by "rotating"
// given array
// hint: use binary search

function findMin(nums) {

  if(nums.length === 1) return nums

  // find midpoint
  const midIndex = Math.floor(nums.length / 2)

  if(nums[midIndex] < nums[midIndex - 1]) {
    return nums[midIndex]
  } else if (nums[midIndex] > nums[nums.length - 1]) {
    return findMin(nums.slice(midIndex + 1))
  }
  return findMin(nums.slice(0, midIndex))
}



let nums = [0, 1, 2, 3, 4, 5]
let nums1 = [3,4,5,1,2]
let nums2 = [4,5,6,7,0,1,2]
let nums3 = [11,13,15,17]
console.log(findMin(nums))
console.log(findMin(nums1))
console.log(findMin(nums2))
console.log(findMin(nums3))