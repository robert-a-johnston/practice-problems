// input: target number and array of numbers
// output: array with shortest combination of numbers that add
// to target number

// time complex: brute force: O(n^m * m)  memo:O(n * m^2)
// space complex: O(m^2)

const bestSum = function(target, numbers, memo = {}) {
  if(target in memo) return memo[target]
  if(target === 0) return []
  if(target < 0) return null

  let shortestCombo = null

  for (let number of numbers) {

    const remainder = target - number
    console.log(shortestComboLength)
    const remainderCombo = bestSum(remainder, numbers, memo)
    if(remainderCombo !== null) {
      const combination = [...remainderCombo, number]
      // if the combination is shorter than the current shortestCombo
      // replace current shortestCombo
      if(shortestCombo === null || combination.length < shortestCombo.length) {
        shortestCombo = combination
      }
    }
  }
  memo[target] = shortestCombo
  return shortestCombo
  
}


// console.log(bestSum(7, [5, 3, 4, 7]))  // [7]
console.log(bestSum(8, [2, 3, 5]))  // [3, 5]
// console.log(bestSum(8, [1, 4, 5])) // [4, 4]
// console.log(bestSum(100, [1, 2,4, 25])) // [25, 25, 25, 25]
