// input: array of positive integers numbers and target integer
// output: boolean
// objective: return true if can add numbers in array to
// = target value, else return false
//  can use element of array as many times as needed

// time complex: O(m*n)
// space complex: O(m)


// m = target n = numbers.length
const canSum =(target, numbers) => {
  let table = Array(target + 1).fill(false)

  table[0] = true

  for(let i = 0; i <= target; i++){
    if(table[i] === true){
      for(let num of numbers){
      table[i + num] = true
      }
    }
  }

  return table[target]
}

console.log(canSum(7, [5, 3, 4, 7]))  // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(7, [2, 3])) // true
console.log(canSum(300, [7, 14])) // false