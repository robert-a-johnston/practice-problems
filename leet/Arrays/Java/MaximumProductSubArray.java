// Given an integer array nums, find a contiguous non-empty 
// subarray within the array that has the largest product, 
// and return the product.

// It is guaranteed that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// I: array
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize
// the answer is guaranteed to fit in a 32 bit integer

// time complexity: 
// space complexity:  

// Objective: return the value of the sub-array with the largest product

// brute force sum every sub-array and save max value of each return the
// max value of all sub max values


public class MaximumProductSubArray {
  public static void main(String[] rgs) {
    int[] nums = new int[] {5,4,-1,7,8};
    int[] nums2 = new int[] {-2, 0, 1};
    System.out.println(maxProduct(nums));
    System.out.println("nums2 " + maxProduct(nums2));
  }

  public static int maxProduct(int[] nums) {
      // create two arrays to keep track of min and max
      int[] max = new int[nums.length];
      int[] min = new int[nums.length];

      // set initial values to the same value at nums[0]
      max[0] = min[0] =nums[0];
      int result = nums[0];

      for (int i = 1; i < nums.length; i++) {
        // if value is positive
        if(nums[i] > 0) {
          max[i] = Math.max(nums[i], max[i - 1] * nums[i]);
          min[i] = Math.min(nums[i], min[i - 1] * nums[i]);
          // if value is neg
        } else {
          max[i] = Math.max(nums[i], min[i - 1] * nums[i]);
          min[i] = Math.min(nums[i], max[i - 1] * nums[i]);
        }
        result = Math.max(result, max[i]);
      }
      return result;
    }
}
