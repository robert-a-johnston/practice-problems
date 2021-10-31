// I: array and target number
// O: indices of the two  numbers in any order
// EDGE CASE: empty array, number used twice
// CONSTRAINTS: optimize

// time complexity: O(n^2), O(n)
// space complexity:  

// Objective: return indices of two numbers in array that add to target
// can't use the same element twice, numbers not unique

function twoSum(nums, target) {
  let an = []
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    for(let j = 0; j < nums.length; j++) {
      if(i !== j && num + nums[j] === target){
        an.push(i)
        an.push(j)
        return an
      }
    }
  }
}

// uses hash table
function twoSum2(nums, target) {
  let numbObject = {}         // hash table

  // fill hash table
  for(let i = 0; i < nums.length; i++){
    let num = nums[i]
    // sets key to number and index to value '5': 1
    numbObject[num] = i
  }

  for(let i = 0; i < nums.length; i++){
    // gets a target number to search for
    let diff = target - nums[i]

    // if hash table has number and the value
    // and makes sure not using the same element twice
    console.log(numbObject)
    console.log(diff, numbObject[diff], i)
    if(numbObject.hasOwnProperty(diff) && numbObject[diff] !== i) {
      // return index of numbers used in any order
      return [i, numbObject[diff]]
    }
  }
}
let nums1 = [3, 3, 4]
let nums2 = [4, 5, 6, 1]
// console.log(twoSum(nums1, 6))
console.log(twoSum2(nums2, 6))