package Leet.Arrays.Java;
// Given an integer array nums, return an array 
// answer such that answer[i] is equal to the 
// product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is 
// guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) 
// time and without using the division operation.

// I: array
// O: array
// EDGE CASE: 
// CONSTRAINTS: optimize, O(n) time, no division
// the product of any prefix or suffix of nums is guaranteed
// to fit in a 32 bit integer

// time complexity: 
// space complexity:  

// Objective: return array of answers where you multiply all numbers 
// to the left and to the right of a specific number in the array

import java.util.Arrays;

public class ProductOfArrayExceptSelf {
  public static void main(String[] rgs) {
    int[] nums = new int[] {1, 2, 3, 4};
    System.out.println(Arrays.toString(productExceptSelf(nums)));
  }

  public static int[] productExceptSelf(int[] nums) {
    int[] result = new int[nums.length];
    // sets last result to 1
    result[nums.length - 1] = 1;
    // Scans from right to left  adds values to result array
    for(int i = nums.length - 2; i >= 0; i--) {
      result[i] = result[i + 1] * nums[i + 1];
    }

    int left = 1;
    // scans from left to right multipies number by 
    // right to left scan and replaces result with new
    // product
    for(int i = 0; i < nums.length; i++) {
      result[i] = result[i] * left;
      left = left * nums[i];
    }

    return result;

  }
}
