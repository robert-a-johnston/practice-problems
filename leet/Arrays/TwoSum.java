// I: array and target number
// O: indices of the two  numbers in any order
// EDGE CASE: empty array, number used twice
// CONSTRAINTS: optimize

// time complexity: O(n^2), O(n)
// space complexity:  

// Objective: return indices of two numbers in array that add to target
// can't use the same element twice, numbers not unique


import java.util.HashMap;
import java.util.Scanner;
import java.util.Map;

// O(n)
class TwoSum {
  private static int[] findTwoSum(int[] nums, int target){
    Map<Integer, Integer> numMap = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int complement = target - nums[i];
      if (numMap.containsKey(complement)){
        return new int[] { numMap.get(complement), i };
      } else {
        numMap.put(nums[i], i);
      }
    }
    return new int[] {};
  }





// O(n^2)
// class TwoSum {
//   private static int [] findTwoSum_BruteForce(int[] nums, int target) {
//     for (int i = 0; i < nums.length; i++) {
//       for (int j = i + 1; j < nums.length; j++) {
//         if(nums[i] + nums[j] == target) {
//           return new int[] {i, j};
//         }
//       }
//     }
//   return new int[] {};
//   }

  public static void main(String[] args) {
    Scanner keyboard = new Scanner(System.in);

    System.out.println(("Enter array numbers:"));
    int n = keyboard.nextInt();
    int[] nums = new int[n];

    System.out.println(("Enter target number:"));
    for(int i = 0; i < n; i++) {
      nums[i] = keyboard.nextInt();
    }
    int target = keyboard.nextInt();

    keyboard.close();

    int[] indices = findTwoSum(nums, target);

    if (indices.length == 2) {
      System.out.println(indices[0] + " " + indices[1]);
    } else {
      System.out.println("No solution found!");
    }
  }
}

