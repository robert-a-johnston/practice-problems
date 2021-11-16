// input: target Sum array of numbers
// output: array containing elements that =
// target sum  if no none return null

// time complex: brute force: O(n^m * m)  memo:O(n * m^2)
const howSum = function(target, numbers, memo = {}) {
  if(target in memo) return memo[target]
  if(target === 0) return []
  if(target < 0) return null

  for (let num of numbers) {
    const remainder = target - num
    const remainderResult = howSum(remainder, numbers, memo)
    if(remainderResult !== null) {
      memo[target] = [...remainderResult, num]
      return memo[target]
    }
  }
  memo[target] = null
  return null
}


console.log(howSum(7, [5, 3, 4, 7])) //[3, 4] [7]
console.log(howSum(8, [2, 3, 5]))  // [2, 2, 2, 2], [3, 5]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(0, [1, 2, 3])) //[]
console.log(howSum(300, [7, 14]))