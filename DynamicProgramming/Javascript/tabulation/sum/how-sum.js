// input: array of positive integers numbers and target integer
// output: array
// objective: return array of elements that sum to target
// if cannot make sum return null
//  can use element of array as many times as needed

// time complex: O(m^2*n)
// space complex: O(m^2)

const howSum = (target, numbers) => {
  const table = Array(target + 1).fill(null)

  table[0] = []
  for(let i = 0; i <= target; i++){
    if(table[i] !== null){
      for(let num of numbers){
        table[i + num] = [...table[i], num]
      }
    }
  }


  return table[target]
}


console.log(howSum(7, [5, 3, 4, 7]))  // [4, 5]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(300, [7, 14])) // null
console.log(howSum(300, [7, 14])) // null