// I: array of integers
// O: boolean
// EDGE CASE: empty array
// CONSTRAINTS: optimize

// time complexity: O(n^2), O(n)
// space complexity:  

// Given an integer array nums, return true if any 
// value appears at least twice in the array, and 
// return false if every element is distinct.

// brute force fails
function containsDuplicateBF(nums) {
  // sort numbers
  nums.sort()
  // check if current value is = next value
  for(let i = 0; i < nums.length; i++) {
    if(nums[i]  === nums[i + 1]){
      return true
    }
  }
  return false
}

function containsDuplicate(nums){
  // create hash table
  const hashM = new Map()
  // assign number count to 1
  for(let i = 0; i < nums.length; i++){
    console.log(hashM.get(nums[i]))
    // check if number has been used before
    if(hashM.get(nums[i]))
      return true
    hashM.set(nums[i], 1)
    console.log(hashM)
  }
  return false
}

let nums = [1, 2, 3, 2, 5, 2]
let nums2 = [1, 2, 3, 4,]

console.log(containsDuplicateBF(nums2))