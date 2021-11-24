// You are given an integer array nums. You are initially 
// positioned at the array's first index, and each element 
// in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

const canJump2 = function(nums) {
  var max = 0
  for (let i = 0; i < nums.length; i++) {
    if(i > max) return false
    max = Math.max(max, i + nums[i])
  }
  return true
}

const canJump = function(nums) {
  let lastGoodIndexPosition = nums.length -1
  for (let i = nums.length -1; i >= 0; i--){
    if(i + nums[i] >= lastGoodIndexPosition){
      lastGoodIndexPosition = i
    }
    if(lastGoodIndexPosition === 0) return true
  }
  return false
}

console.log(canJump([2, 3, 1, 1, 4]))  // true
console.log(canJump([3, 2, 1, 0, 4])) // false