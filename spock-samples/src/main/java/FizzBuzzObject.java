public class FizzBuzzObject {

    private final int n;

    public FizzBuzzObject(int n) {
        this.n = n;
    }

    public Result computeResult() {
        return new Result("Object result:" + FizzBuzz.fizzBuzz(n));
    }

    @Override
    public String toString() {
        return "FizzBuzzObject{" +
                "n=" + n +
                '}';
    }

    public static class Result {
        private String s;

        public Result(String s) {
            this.s = s;
        }

        @Override
        public String toString() {
            return "Result{" +
                    "s='" + s + '\'' +
                    '}';
        }

        public String getResult() {
            return s;
        }
    }
}
