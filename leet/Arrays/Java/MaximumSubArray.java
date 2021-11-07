// Given an integer array nums, find the contiguous subarray 
// (containing at least one number) which has the largest sum 
// and return its sum.

// I: array
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize

// time complexity: O(n)
// space complexity:  

// Objective: return array of answers where you multiply all numbers 
// to the left and to the right of a specific number in the array


public class MaximumSubArray {
  public static void main(String[] rgs) {
    int[] nums = new int[] {5,4,-1,7,8};
    int[] nums2 = new int[] {1};
    System.out.println(maxSubArray(nums));
    System.out.println("nums2 " + maxSubArray(nums2));
  }

  public static int maxSubArray (int[] nums){
    int arrSize = nums.length;
    int localMax = 0;
    int globalMax = Integer.MIN_VALUE;

    for(int i = 0; i < arrSize; i++) {
      // set the local max to the greater of array value or
      // array value + local max
      localMax = Math.max(nums[i], nums[i] + localMax);

      // if set global max to local max to keep track of 
      // largest value.
      if (localMax > globalMax) {
        globalMax = localMax;
      }
    }
    return globalMax;
  }


}
