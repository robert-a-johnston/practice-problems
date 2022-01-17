// I: array
// O: array
// EDGE CASE: array has one item
// CONSTRAINTS: O(log(n))

// time complexity: O(log(n))
// space complexity:  

// Objective: return an sorted array from min to max by "rotating"
// given array
// hint: use binary search and recursion

function findMin(nums) {
  // for outlier condition
  if (nums.length === 1) return nums

  // find middle index of array
  const midIndex = Math.floor(nums.length / 2)
  
  // if value at center of array is less than value
  // to the left of the center return middle index value
  // ends recursion
  if(nums[midIndex] < nums[midIndex - 1]) {
    return nums[midIndex]
  // if value at center of array is greater than value
  // to the left of the center recurse array using values
  // to the right of the middle index
  } else if (nums[midIndex] > nums[nums.length - 1]) { 
    return findMin(nums.slice(midIndex + 1))
  }
  // recursive call to find min using the values
  // to the left of middle index value an include middle index value
  return findMin(nums.slice(0, midIndex))
}



let nums = [2, 3, 1]
let nums1 = [3,4,5,1,2]
let nums2 = [4,5,6,7,0,1,2]
let nums3 = [11,13,15,17]
console.log(findMin(nums))
// console.log(findMin(nums1))
// console.log(findMin(nums2))
// console.log(findMin(nums3))