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

function coinChange(coins, amount) {

  const table = Array(amount + 1).fill(Infinity)

  table[0] = 0

  for(let coin of coins){
    for(let amount = 0; amount < table.length; amount++) {
      if(coin <= amount){
        let idx = amount - coin
        let potentialAmt = table[idx] + 1
        table[amount] = Math.min(potentialAmt, table[amount])
      }
    }
  }
  return table[table.length - 1] === Infinity ? -1 : table[table.length - 1]
}



const coins = [1, 2, 5, 10]

console.log(coinChange(coins, 12))