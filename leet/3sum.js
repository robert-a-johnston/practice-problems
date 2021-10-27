// Given an integer array nums, return all the 
// triplets [nums[i], nums[j], nums[k]] such 
// that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// I: array of integers
// O: array of array of integers
// EDGE CASE: empty array, array= [0]
// CONSTRAINTS: optimize

// time complexity: 
// space complexity:  

// Objective: get all triplets that sum to 0

function threeSum(nums) {
    let result = [];
    nums.sort((a, b) => a - b)

    for (let i = 0; i <= nums.length - 3; i++) {
      // skips duplicates
        if (nums[i] === nums[i - 1]) continue
        // set pointers to front and back of array
        let j = i + 1
        let k = nums.length - 1

        // pointers move together
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum < 0) j++
            else if (sum > 0) k--
            else if (nums[i] !== nums[j] !== nums[k]) result.push([nums[i], nums[j], nums[k]]), j++, k--
        }
    }
    console.log(result)
    // to remove duplicate sub-arrays
    let uniqueArray = Array.from(new Set(result.map(JSON.stringify)), JSON.parse)
    return uniqueArray
}


let nums = [-1,0,1,2,-1,-4]
let nums2 = [0]
let nums3 = []

console.log(threeSum(nums))