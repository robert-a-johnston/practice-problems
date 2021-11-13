package DynamicProgramming.Java.memo.sum;
import java.util.HashMap;
import java.util.Map;
// input: array of positive integers and target integer
// output: boolean
// objective: return true if can add numbers in array to
// = target value, else return false
//  can use element of array as many times as needed
// time complex: brute force: O(n^m) memoizationO(m * n) 
public class CanSum {
  public static void main(String[] args) {
    System.out.println(canSumMemo(7, new int[] { 2, 3 })); //true
    memoTable.clear();
    System.out.println(canSumMemo(7, new int[] { 5, 3, 4, 7 })); //true
    memoTable.clear();
    System.out.println(canSumMemo(7, new int[] { 2, 4 })); //false
    memoTable.clear();
    System.out.println(canSumMemo(8, new int[] { 2, 3, 5 })); //true
    memoTable.clear();
    System.out.println(canSumMemo(300, new int[] { 7, 14 })); //false
    memoTable.clear();
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

  // table to hold memos get and put O(1)
  private static Map<Integer, Boolean> memoTable = new HashMap<>();

  public static boolean canSumMemo(int target, int[] numbers) {
    
    // base cases
    if(memoTable.containsKey(target)) return memoTable.get(target);
    if(target == 0) return true;
    if(target < 0 ) return false;

    for(int number : numbers){
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


