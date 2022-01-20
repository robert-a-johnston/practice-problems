// You are given an integer array coins representing coins 
// of different denominations and an integer amount representing 
// a total amount of money.

// Return the fewest number of coins that you need to make up 
// that amount. If that amount of money cannot be made up by any 
// combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// I: array, integer
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize

// time complexity: 
// space complexity:  

// Objective: get fewest number of integers in array to get to target int
// if cannot get to target then return -1


const coinChange = (coins, amount) => {
  // create hash table
  const table = Array(amount + 1).fill(null)
  // set initial table value to empty array
  table[0] = []

  // Iterate the amount number of times
  for(let i = 0; i <= amount; i++) {
    // if the value of the table is not equal to null
    if(table[i] !== null) {
      // iterate over coin array
      for(let coin of coins) {
        // set combo to add coin to array of table at index i
        const combo = [...table[i], coin]
        // if no value in table at i + coin value or
        // length of array at i + coin is greater than current combo length
        if(!table[i + coin] || table[i + coin].length > combo.length) {
          // set value in table at i + coin value to combo
          table[i + coin] = combo
        }
      }
    }
  }
  // if the value in the table at amount has not been changed (is null)
  // cannot get to amount with coins return -1
  if(table[amount] === null){
    return -1
  } 
  // return length of array in table at index amount
  return table[amount].length
}


const coins = [1, 2, 5, 10]

console.log(coinChange(coins, 12))
console.log(coinChange([2], 3))