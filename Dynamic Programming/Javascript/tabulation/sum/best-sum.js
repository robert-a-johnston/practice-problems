// input: target number and array of numbers
// output: array with shortest combination of numbers that add
// to target number

// m target sum n numbers.length
// time complex: O(m^2 * n)
// space complex: O(m^2)

const bestSum = (target, numbers) => {
  const table = Array(target + 1).fill(null)
  table[0] = []
  
  for(let i = 0; i <= target; i++) {
    
    if(table[i] !== null) {
      for(let num of numbers) {
        const combination = [ ...table[i], num]
        if(!table[i + num] || table[i + num].length > combination.length)
          table[i + num] = combination
      }
    }
  }
  return table[target]
}

console.log(bestSum(7, [5, 3, 4, 7]))  // [7]
console.log(bestSum(8, [2, 3, 5]))  // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2,4, 25])) // [25, 25, 25, 25]