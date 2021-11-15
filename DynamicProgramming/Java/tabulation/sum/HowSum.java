package DynamicProgramming.Java.tabulation.sum;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
// input: array of positive integers numbers and target integer
// output: array
// objective: return array of elements that sum to target
// if cannot make sum return null
//  can use element of array as many times as needed

// time complex: O(m^2*n)
// space complex: O(m^2)

public class HowSum {
  public static void main(String[] args) {
   // System.out.println(howSum(7, new int[] { 2 })); 
   // table.clear();
    System.out.println(howSum(7, new int[] { 5, 3, 4, 7 })); 
    // table.clear();
    // System.out.println(howSum(7, new int[] { 2, 4 })); 
    // table.clear();
    // System.out.println(howSum(8, new int[] { 2, 3, 5 })); 
    // table.clear();
    // System.out.println(howSum(300, new int[] { 7, 14 })); //false
    // table.clear();
  }

  // table to hold memos get and put O(1)
  private static Map<Integer, ArrayList<Integer>> table = new HashMap<>();

  public static ArrayList<Integer> howSum(int target, int[] numbers) {
    
    // ArrayList<ArrayList<Integer>> list = new ArrayList<ArrayList<Integer>>();
    ArrayList<Integer>[] list = new ArrayList[target + 1];
    for(int i = 0; i <= target; i++) {
      list[i] = null;
    }
    ArrayList<Integer> temp = new ArrayList<>();
    ArrayList<Integer> temp2 = new ArrayList<>();
    
    list[0] = temp;

     for(int i = 0; i <= target; i++) {
      System.out.println("i= " + i);
      if(list[i] != null) {   
         for(int number : numbers) {
           if(i + number <= target){        
              temp.add(number);
              System.out.println("temp add number= " + temp);
              System.out.println(temp2);
              if(list[i + number] != null) {
                temp.addAll(list[i]);
              } else {         
              list[i + number] = temp;
              }
              System.out.println("i + number= " + i + number);
              System.out.println("list[i + number]= " + list[i + number]);
              temp.clear();          
           }     
         }     
       }
     }
    
    System.out.println("target " + target);
    return list[target];
  }
}