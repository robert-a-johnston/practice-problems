// Given an unsorted array of integers nums, return the 
// length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
   // create set for lookup table
    let set = new Set(nums)
    // create counter
    let counter = 0

    // iterate over entire set once
    set.forEach(num => {
      let currNum
      let currCount
      // check to see if number is beginning 
      // of sequence
      if(!set.has(num-1)) {
        currNum = num
        currCount = 1
        // while there is one number larger in set
        while(set.has(currNum + 1)) {
          currNum++
          currCount++
        }
        // set the max to the greater of count and currCount
        // to get largest length
        counter = Math.max(counter, currCount)
      }
    })
    return counter
}


const nums = [100,4,200,1,3,2]   // 4
const nums2 = [0,3,7,2,5,8,4,6,0,1] // 9
const nums3 = []
const nums4 = [2]
console.log(longestConsecutive(nums3))
console.log(longestConsecutive(nums4))