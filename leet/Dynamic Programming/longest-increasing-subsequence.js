// Given an integer array nums, return the 
// length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived 
// from an array by deleting some or no elements without 
// changing the order of the remaining elements. 
// For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

const lengthOfLIS = (nums) => {
 // Create dynamic programming array
 const dp = Array(nums.length).fill(1);
 // Return value set max to 1, which is the smallest max possible
 let maxSubsequence = 1

 // Check all increasing subsequences up to the current ith number in nums
 for (let i = 1; i < nums.length; i++) {
     // Keep track of subsequence length in the dynamic programming array
     for (let j = 0; j < i; j++) {
         // Only change value if the numbers are increasing
         if (nums[i] > nums[j]) {
             // Set the value to be the largest subsequence length
             dp[i] = Math.max(dp[i], dp[j] + 1)
             // Set max length subsequence
             maxSubsequence = Math.max(dp[i], max)
         }
     }
 }
 
return maxSubsequence;
}


const nums = [0, 1, 0, 3, 2, 3]
const nums2 = [7, 7, 7, 7, 7]
const nums3 = [10,9,2,5,3,7,101,18]
const nums4 = [4,10,4,3,8,9]
console.log(lengthOfLIS(nums4))