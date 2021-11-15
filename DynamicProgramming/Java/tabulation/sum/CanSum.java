package DynamicProgramming.Java.tabulation.sum;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
// input: array of positive integers numbers and target integer
// output: boolean
// objective: return true if can add numbers in array to
// = target value, else return false
//  can use element of array as many times as needed

// time complex: O(m*n)
// space complex: O(m)
public class CanSum {
  public static void main(String[] args) {
    System.out.println(canSum(7, new int[] { 2, 3 })); //tru
    System.out.println(canSum(7, new int[] { 5, 3, 4, 7 })); //true
    System.out.println(canSum(7, new int[] { 2, 4 })); //false
    System.out.println(canSum(8, new int[] { 2, 3, 5 })); //true
    System.out.println(canSum(300, new int[] { 7, 14 })); //false
  }

  

  public static boolean canSum(int target, int[] numbers) {

    Boolean[] table = new Boolean[target + 1];
    Arrays.fill(table, false);
    table[0] = true;
  //   for(int i = 0; i < table.length; i++) {
  //     System.out.println(table[i]);
  //  }
    for(int i = 0; i <= target; i++){
      if(table[i] == true){
        for(int number : numbers){
          if(i + number < table.length)
            table[i + number] = true;
        }
      }
    }
  //   for(int i = 0; i < table.length; i++) {
  //     System.out.println(table[i]);
  //  }
    return table[target];
  }
}
