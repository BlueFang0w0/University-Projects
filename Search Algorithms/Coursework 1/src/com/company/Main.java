package com.company;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        long startTime = System.nanoTime();
        //Change this for different test sets
        String fileName = "Test3"; // The test sets need to be in the same place as 'src'.
        String fileExtension = ".txt";

        //Runs train sets
        Depths_First dfs = new Depths_First(fileName , fileExtension);
        dfs.search();

        //Runs test 1, 2 ,3
        //colonyOptimisation(200 , fileName ,fileExtension);

        //Runs test 4
       // colonyOptimisation(1 , fileName , fileExtension);


        long endTime = System.nanoTime();
        double elapsedTimeInSecond = (double) (endTime - startTime) / 1_000_000;
        System.out.println("Complete in: " + elapsedTimeInSecond + "ms");

    }

    //Runs test 1 , 2 , 3 , 4
    public static void colonyOptimisation(int iteration , String filename , String fileExtension){
        double globalBest = Double.MAX_VALUE;
        int[] bestPath = null;
        for(int iter = 0; iter < iteration; iter++){
            Colony_Opt colony = new Colony_Opt(filename , fileExtension);
            colony.activateColony();

            if(globalBest > colony.getBestDistance()){
                globalBest = colony.bestDistance;
                bestPath = colony.getBestPath();
            }
        }
        System.out.println("Algorithm ACO ");
        System.out.println("Best Path: " + Arrays.toString(bestPath));
        System.out.println("Best Distance: " + globalBest);
    }
}
