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
    // Return array value
    let result = []
    // Sorts nums array
    nums.sort((a, b) => a - b)

    // Iterate over array except last two elements
    for (let i = 0; i <= nums.length - 3; i++) {
        // skips duplicates
        if (nums[i] === nums[i - 1]) continue
        // set pointers to front and back of array
        let front = i + 1
        let back = nums.length - 1

        // pointers move together
        while (front < back) {
            // Sets sum of pointers and current number
            let sum = nums[i] + nums[front] + nums[back]
            // If sum is less than target 0 then move front pointer to right
            if (sum < 0) {
                front++
            }
            // If sum is greater than target 0 then move back pointer to left
            else if (sum > 0) {
                back--
            }
            // If pointer values and current number are not the same
            // Push values to result array  then move pointers
            else if (nums[i] !== nums[front] !== nums[back]) {
                result.push([nums[i], nums[front], nums[back]])
                front++
                back--
            }
        }
    }
    
    // to remove duplicate sub-arrays
    let uniqueArray = Array.from(new Set(result.map(JSON.stringify)), JSON.parse)
    return uniqueArray
}


let nums = [-1,0,1,2,-1,-4]
let nums2 = [0]
let nums3 = []

console.log(threeSum(nums))