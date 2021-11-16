// Given an array of distinct integers nums and a 
// target integer target, return the number of possible 
// combinations that add up to target.

// The answer is guaranteed to fit in a 32-bit integer.

var combinationSum4 = function(nums, target) {
  const table = new Array(target + 1).fill(0);
    table[0] = 1;
    for(let i = 1; i<= target; i++) {
        for(let number of nums) {
          // if i minus number in nums is not neg
            if((i - number) >=0) {
                table[i] += table[i - number];
                
            }
        }
    }
    // return second to last value in table
    return table[target];

  
}

console.log(combinationSum4([1, 2, 3], 4))
console.log(combinationSum4([9], 3))