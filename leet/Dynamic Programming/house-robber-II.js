// You are a professional robber planning to rob
// houses along a street. Each house has a certain
// amount of money stashed. All houses at this
// place are arranged in a circle. That means
// the first house is the neighbor of the last one.
// Meanwhile, adjacent houses have a security system 
// connected, and it will automatically contact the 
// police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount 
// of money of each house, return the maximum amount 
// of money you can rob tonight without alerting the police.

const houseRobber2 = (nums) => {
  if(!nums.length) return 0
  if(nums.length === 1) return nums[0]
  if(nums.length === 2) return Math.max(nums[0], nums[1])
  if(nums.length === 3) return Math.max(nums[0], nums[1], nums[2])

  const helpRob = (startIndex, endIndex) => {
    let sum1 = 0
    let sum2 = 0
    for(let i = startIndex; i < endIndex; i++) {
      let temp = Math.max(nums[i] + sum1, sum2)
      sum1 = sum2
      sum2 = temp    
    }
    console.log('sum1, sum2 ', sum1, sum2)
    return sum2
  }
  return Math.max(helpRob(0, nums.length - 1), helpRob(1, nums.length))
}

console.log(houseRobber2([2, 3, 2]))
console.log(houseRobber2([1, 2, 1, 1]))