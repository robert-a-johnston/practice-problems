package Leet.Arrays.Java;
import java.util.Arrays;

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

// time complexity: o(n)
// space complexity:  

// Objective: return amount of profit made by buying lowest and selling highest

public class buySell {

  public static void main(String[] args) {
    int[] prices = new int[] {7, 1, 5, 3, 6, 4};
    System.out.println(maxProfit(prices));
  }

  public static int maxProfit(int[] prices) {
    // check that there are prices
    if(prices.length == 0) return 0;
    // set up array to keep track of profit
    int[] profit = new int[prices.length];
    // initialize array values to 0
    for(int i = 0; i < profit.length; i++) {
      profit[i] = 0;
    }
    System.out.println(Arrays.toString(profit));

    int min = prices[0];
    for(int i = 1; i < prices.length; i++) {
      if(prices[i] < min) {
        min = prices[i];
      }
      profit[i] = Math.max(profit[i - 1], prices[i] - min);
    }
    return profit[prices.length - 1];
  }
  
}


