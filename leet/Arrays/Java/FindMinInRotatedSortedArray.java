import java.util.Arrays;

// I: array
// O: array
// EDGE CASE: array has one item
// CONSTRAINTS: O(log(n))

// time complexity: O(log(n))
// space complexity:  

// Objective: return an sorted array from min to max by "rotating"
// given array
// hint: use binary search

public class FindMinInRotatedSortedArray {
  public static void main(String[] args) {
    int[] nums = new int[] {2, 3, 4, 5, 1};
    int[] nums2 = new int[] {4,5,6,7,0,1, 2};
    System.out.println("nums " + findMin(nums));
    System.out.println("nums2 " + findMin(nums2));
  }

  public static int findMin(int[] nums) {
    if(nums==null || nums.length==0)
    return -1;

int i=0; 
int j=nums.length-1;

while(i<=j){
  System.out.println(nums[i] + " " + nums[j]);
    if(nums[i]<=nums[j])
        return nums[i];

    int m=(i+j)/2;

    if(nums[m]>=nums[i]){
        i=m+1;
    }else{
        j=m;
    }
}

return -1;
}
}
