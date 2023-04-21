package com.company;

public class Random_Generator {
    public class Generator{
        int seed;

        Generator(int seed){
            this.seed = seed;
        }

        public int intRandom(int from, int to){
            int result = 0;

            return result;
        }

        public double percentageRandom(int roundTo){
            double result = 0;

            return  result;
        }

    }

    public class test extends Generator{

        test(int seed) {
            super(seed);
        }

        public void another(){
            percentageRandom(1); // <------ I inherited it.
        }
    }
}
