package DynamicProgramming.Java.memo.sum;
import java.util.HashMap;
// input: array of positive integers and target integer
// output: boolean
// objective: return true if can add numbers in array to
// = target value, else return false
//  can use element of array as many times as needed
// time complex: brute force: O(n^m) memoizationO(m * n) 
public class CanSum {
  public static void main(String[] args) {
    int[] numbers = {5, 3, 4, 7};
    int[] numbers2 = {7, 14};
    System.out.println("hello");
    System.out.println(canSum(7, numbers));
    System.out.println(canSumMemo(7, numbers));
    System.out.println(canSumMemo(15, numbers2));
  }

  public static boolean canSum(int target, int[] numbers ) {
    // base cases
    if(target == 0) return true;
    if(target < 0 ) return false;

    for(int number : numbers ){
      int remainder = target - number;
      if(canSum(remainder, numbers)) return true;
    }
    return false;
  }

  public static boolean canSumMemo(int target, int[] numbers ) {
    HashMap<Integer, Boolean> memoTable = new HashMap<>();
    // base cases
    if(memoTable.containsKey(target)) return memoTable.get(target);
    if(target == 0) return true;
    if(target < 0 ) return false;

    for(int number : numbers ){
      int remainder = target - number;
      if(canSumMemo(remainder, numbers)) {
        memoTable.put(target, true);
        return true;
      }
    }
    memoTable.put(target, false);
    return false;
  }

  
}


