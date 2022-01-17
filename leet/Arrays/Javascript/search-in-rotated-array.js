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
  // pointers
  let left = 0  // will become pivot point
  let right = nums.length - 1 // end index of array nums

  //find the pivot
  while(left < right){
    // Set midpoint index between left and right pointers
    let mid = Math.floor((left + right) / 2)
    // If the value at the middle is greater than the number
    // at the right, then value to the right of middle is the pointer
    if(nums[mid] > nums[right]){
        left = mid + 1
    }else{
    // set right pointer to middle of array
    // removing values from the end of the array
        right = mid
    }
  }   
  
  // set pivot point
  let pivot = left
  // reset left pointer to first index
  left = 0
  // reset right pointer to last index
  right = nums.length - 1

  // If the value at the pivot is less than or equal to the target value and
  // the target value is less than or equal to the value at the right pointer
  // set left pointer to pivot point
  // else the right pointer is set to pivot point
  if(nums[pivot] <= target && target <= nums[right]) {
    left = pivot 
  } else {
    right = pivot 
  }


  // move pointers together until they reach the same index
  while(left <= right) {
    // Set midpoint index between left and right pointers
    let mid = Math.floor((left + right) / 2)
    // If the target number is = the middle value return value
    // found target
    if(nums[mid] === target) {
      return mid 
    }
    //  If the value at mid is less than the target number
    // set left pointer index to mid + 1 indexe
    // moves the left pointer to the right
    if(nums[mid] < target) {
      left = mid + 1
    } else {
    // Set right pointer index to mid - 1 index
    // moves the right pointer left
      right = mid - 1
    }
  }
  // If target is not in array return -1
  return -1
}

let nums = [3, 4, 5, 1, 2]
let nums2 = [4,5,6,7,0,1,2]
console.log(search(nums2, 0))