// input: array of positive integers and target integer
// output: boolean
// objective: return true if can add numbers in array to
// = target value, else return false
//  can use element of array as many times as needed
// time complex: brute force: O(n^m) memoizationO(m * n) 

let canSum = function(target, numbers, memo = {}) {
  if(target in memo) return memo[target]
  if(target === 0) return true
  if(target < 0) return false

  for(let number of numbers) {

    const remainder = target - number

    if(canSum(remainder, numbers, memo) === true) {
      memo[target] = true
      return true
    } 
  }
  memo[target] = false
  return false
}



console.log(canSum(7, [5, 3, 4, 7]))  // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(7, [2, 3])) // true
console.log(canSum(300, [7, 14])) // false