// Given an array of distinct integers nums and a 
// target integer target, return the number of possible 
// combinations that add up to target.

// The answer is guaranteed to fit in a 32-bit integer.

var combinationSum4 = function(nums, target) {
  const table = Array(target + 1).fill(null)
  table[0] = []
  const ans = []

  for(let i = 0; i <= target; i++) {
    if(table[i] !== null) {
      for(let num of nums) {
        table[i + num] = [...table[i], num]
        
        
        console.log(table[i+ num])
      }
    }
  }
}

console.log(combinationSum4([1, 2, 3], 4))
console.log(combinationSum4([9], 3))