import java.util.Objects;

public class FizzBuzz {
    public static String fizzBuzzNull(int n) {
        return null;
    }

    public static String fizzBuzz(int n) {
        String result = "";
        if(n%3 == 0) result += "Fizz";
        if(n%5 == 0) result += "Buzz";
        if (Objects.equals("", result)) return Integer.toString(n);
        else return result;
    }
}
