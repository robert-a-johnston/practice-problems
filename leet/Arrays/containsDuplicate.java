import java.util.HashSet;

public class containsDuplicate {
  public static void main(String[] args) {
    int[] nums = new int[] {1, 1, 1, 2, 3, 4};
    System.out.println(containsDuplicate(nums));
  }

  public static boolean containsDuplicate(int[] nums) {
    // check to make sure not empty array
    if(nums == null || nums.length == 0) return false;

    // create hash table
    HashSet<Integer> set = new HashSet<Integer>();

    // check for duplicates
    for(int i: nums) {
      if(!set.add(i)){
        return true;
      }
    }
    return false;
  }
}
