// You are given an array prices where prices[i] 
// is the price of a given stock on the ith day.

// You want to maximize your profit by choosing 
// a single day to buy one stock and choosing a 
// different day in the future to sell that stock.

// Return the maximum profit you can achieve 
// from this transaction. If you cannot achieve 
// any profit, return 0.

// I: array of prices (index = day value = price)
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize

// time complexity: 
// space complexity:  

// Objective: return amount of profit made by buying lowest and selling highest

function buySell(prices) {
  // always buy on first day
  // check if next day is lower or higher
  // if lower change to buy price
  // if higher save sell price

  // set buy price
 let buy = prices[0]
 // track and return profit
 let profit = 0
 // set initial price to 0 because
 // buy is always set to first price
 prices[0] = 0


 // iterate through prices array
 // start at second value because first value is = 0
  for( let i = 1; i < prices.length; i++) {
    // change buy price if current price is < buy price
    if(prices[i] < buy){
      buy = prices[i]
      prices[i] = 0
    } else {
      // set profit to max between current price and previous profit
      profit = Math.max(prices[i] - buy, profit)
    }
  }
  return profit
}


let ar1 = [2, 4, 1]
console.log(buySell(ar1))