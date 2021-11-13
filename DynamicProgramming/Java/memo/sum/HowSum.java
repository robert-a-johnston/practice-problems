package DynamicProgramming.Java.memo.sum;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

// input: target Sum array of numbers
// output: array containing elements that =
// target sum  if no none return null

// time complex: brute force: O(n^m * m)  memo:O(n * m^2)
public class HowSum {
  public static void main(String[] args) {
    System.out.println(howSum(7, new int[] { 2, 3 })); //[2, 2, 3]
    memoTable.clear();
    // System.out.println(howSum(7, new int[] { 5, 3, 4, 7 })); //[3, 4], [7]
    // memoTable.clear();
    // System.out.println(howSum(7, new int[] { 2, 4 })); //null
    // memoTable.clear();
    // System.out.println(howSum(8, new int[] { 2, 3, 5 })); //[2, 2, 2, 2], [3, 5]
    // memoTable.clear();
    // System.out.println(howSum(300, new int[] { 7, 14 })); //null
    // memoTable.clear();
  }

  private static Map<Integer, ArrayList<Integer>> memoTable = new HashMap<>();
  

  public static ArrayList<Integer> howSum(int target, int[] numbers) {
    System.out.println(memoTable);
    if(memoTable.containsKey(target)) return memoTable.get(target);
    // base cases
    
    if(target == 0) return new int[0];
    if(target < 0) return null;

    for(int number : numbers) {
      int remainder = target - number;
      System.out.println(remainder);
      int[] remainderResult = howSum(remainder, numbers);
      if(remainderResult != null) {
        memoTable.put(target, remainderResult);

        return memoTable.get(target);
      }
    }
    memoTable.put(target, null);
    System.out.println("remainder");
    return null;
  }
}
