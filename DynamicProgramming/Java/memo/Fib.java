package DynamicProgramming.Java.memo;
import java.util.Map;
import java.util.HashMap;

public class Fib {
  public static void main(String[] args) {
    HashMap<Integer, Integer> capitalCities = new HashMap<>();

    // Add keys and values (Country, City)
    capitalCities.put(1,5);
    capitalCities.put(2, 6);
    capitalCities.put(3, 7);
    capitalCities.put(4, 8);
    System.out.println(capitalCities);




    System.out.println(capitalCities.containsKey(2));
    System.out.println(fib(0));
    System.out.println(fib(1));
    System.out.println(fib(6));
    System.out.println(memoFib(30));
    
  }

  public static int fib(int n) {
    // check for neg number
    if(n < 0) {
      throw new IllegalArgumentException(
        "Index was neg");
    }
    
    // base cases
    if(n == 0 || n == 1) {
      return n;
    }
    System.out.printf("computing fib(%d)\n", n);
    return fib(n - 1) + fib(n - 2);
  }


  

  public static int memoFib(int n) {
    // create hashMap to store memos
    HashMap<Integer, Integer> memo = new HashMap<Integer, Integer>();
    
    // check for neg number
    if(n < 0) {
      throw new IllegalArgumentException(
        "Index was neg");
    }
    
    // base cases
    if(n == 0 || n == 1) {
      return n;
    }


    // see if we've already calculated this
    System.out.println("Contains " + n);
    if (memo.containsKey(n)) {
      System.out.printf("grabbing memo[%d]\n", n);
      return memo.get(n);
    }
    
    int result = memoFib(n - 1) + memoFib(n - 2);

    System.out.println("result " + result);
    // memoize
    memo.put(n, result);
    System.out.println(memo);
    
    return result;
  }

}
