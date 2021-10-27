// There is an integer array nums sorted in 
// ascending order (with distinct values).

// Prior to being passed to your function, nums 
// is possibly rotated at an unknown pivot 
// index k (1 <= k < nums.length) such that the 
// resulting array is [nums[k], nums[k+1], ..., 
// nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
// For example, [0,1,2,4,5,6,7] might be rotated 
// at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation 
// and an integer target, return the index of target i
// f it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// I: array ascending order with distinct values, target value
// O: int
// EDGE CASE: 
// CONSTRAINTS: optimize, O(log(n)) time

// time complexity: oO(log(n))
// space complexity:  

// Objective: find the target value index


function search(nums, target) {
  
  let left = 0  // will become pivot point
  let right = nums.length - 1

  //find the pivot
  while(left < right){
    let mid = Math.floor((left + right) / 2)
    console.log('mid, nr', mid, nums[right])
    if(nums[mid] > nums[right]){
        left = mid + 1
    }else{
        right = mid
    }
  }   
  
  let pivot = left
  left = 0
  right = nums.length - 1

  if(nums[pivot] <= target && target <= nums[right]) {
    left = pivot 
  } else {
    right = pivot 
  }

  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    console.log('mid, nums[mid], target', mid, nums[mid],target)
    if(nums[mid] == target) {
      return mid 
    }
    if(nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

let nums = [3, 4, 5, 1, 2]
let nums2 = [4,5,6,7,0,1,2]
console.log(search(nums2, 0))