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
// function containsDuplicate(nums) {
//   let count = 0
//   let tempNum = null
//   for(let i = 0; i < nums.length; i++){
//     tempNum = nums[i]
//     console.log(tempNum)
//      for(let j = 0; j < nums.length; j++) {
//        console.log('tn, j', tempNum, nums[j])
//        if(tempNum === nums[j]){
//          count++
//          console.log('count', count)
//        } 
//      }
//      if(count > 1){
//         return true}
//     // console.log(count)
//      count = 0
//   }
//   return false
//}

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

console.log(containsDuplicate(nums))