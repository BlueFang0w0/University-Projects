package com.company;

import java.util.Arrays;
import java.util.Random;

public class Ant {

    Utils_Code tools;
    double EXPLORATION = 4.0;
    double EXPLOITATION = 1.0;
    int PARTIAL_TOUR_LENGTH = 10;
    Random gen = new Random();
    double[][] distanceMatrix;
    double[][] pheromoneMatrix;
    double accumulator;
    boolean halfActive = true;

    Ant(double[][] colonyDistanceMatrix, double[][] colonyPheromoneMatrix){
        this.distanceMatrix = colonyDistanceMatrix;
        this.pheromoneMatrix = colonyPheromoneMatrix;
    }

    public double getLength(){
        return accumulator;
    }


    private int makeDecision(int[] unvisited , int currentCity){
        double totalProbability = 0;

        //random generator
        double nextDouble = gen.nextDouble();

        int nextCity = -1;

        double lastIndexValue = 0;

        double[] boundaries = new double[unvisited.length];  // e.g {10.0,20.0,30.0,40.0}
        double edgeWeight;

        for(int edge = 0; edge < unvisited.length; edge++ ){
            if(unvisited[edge] != 1){ // 1.0 / 123.1
                edgeWeight = Math.pow((1.0/distanceMatrix[currentCity - 1][edge]) , EXPLORATION) * Math.pow(pheromoneMatrix[currentCity -1][edge] , EXPLOITATION); // (1/D^EXPLORATION) * P^EXPLOITATION :: 1/x = rewards lower paths by making them bigger. Doing to the power allows to bias towards pheromones or exploration.
                totalProbability += edgeWeight;
                boundaries[edge] = lastIndexValue + edgeWeight;
                lastIndexValue+= edgeWeight;
            }
        }

        for(int currentBoundary = 0; currentBoundary < unvisited.length; currentBoundary++){
            if(unvisited[currentBoundary]!= 1){ // Check if the city is visited
                if((boundaries[currentBoundary] / totalProbability) > nextDouble){
                    nextCity = currentBoundary + 1; // Skips
                    break;
                    //do da ting
                }
            }
        }
        return nextCity;
    }

    public int[] makePath(int startingCity , int[] unvisited , int pathLength){ // Return a full path with it's length.
        int currentPathLength = 1;
        int[] antPath = new int[pathLength];
        antPath[0] = startingCity;
        int[]unvisitedArray = unvisited;
        unvisitedArray[startingCity -1 ] =1; //Labels home city in the array with 1.

        int currentCity = startingCity;

        for(int decision = 1; decision < pathLength; decision++){
            int nextCity = makeDecision(unvisitedArray , currentCity);
        //    path.push(nextCity, unvisitedArray, currentPathLength);
            antPath[currentPathLength++] = nextCity;
            unvisited[nextCity -1] = 1;
            accumulator+= distanceMatrix[currentCity -1][nextCity -1];
            currentCity = nextCity;
        }
        accumulator+= distanceMatrix[antPath[0] - 1][antPath[antPath.length -1] -1];

        return antPath;
    }

    // n ϵ allowed cities (cities not visited in the current tour).

    //single city probability loop

    // antPath[currentPathLength -1] = 0; // product of decision
    // currentPathLength++;

    //  Chance of Going from city a - b

    // currentCityProbability = Math.pow(1/CoordinateMatrix[i][j] , Exploration) * Math.pow(PheremoneMatrix[i][j] , Exploitation);
    // totalProbability += Math.pow(1/CoordinateMatrix[i][n] , Exploration) * Math.pow(PheremoneMatrix[i][n] , Exploitation);
    // P = currentCityProbability/totalProbability
    //P(ab) = (1/L(ab)^Explore x Pher(ab)^Exploitation)/Σ(n)(1/L(ab)^Explore x Pher(ab)^Exploitation)


    //P(ab) = 20/60 -> 33.3% -> 33
    //P(ac) = 40/60 -> 66.6 -> 67
    //B(0.01 -> 0.33 , C 0.34 -> 1.00) -> 1->33(B) 34-> 100 (C) // Split a 1 into appropriate sizes and use as range.
    // 2/13 -> generate random number
    // Length from city 1 * pheromone for each city then add them to each other.

    public void goToCity(){

    }

}
