package com.company;

import java.util.Arrays;

public class Colony_Opt {
    Utils_Code tools;
    double INITIAL_PHEROMONE = 0.5;
    double evaporation = 0.1;
    double antFactor = 0.5;
    double[][] distanceMatrix;
    double[][] changeMatrix;
    int numberOfAnts = 25;
    Ant[] ants;
    int iterations = 25;
    int[] bestPath;
    double bestDistance = Double.MAX_VALUE;

    Colony_Opt(String fileType, String fileName){
        this.tools = new Utils_Code(fileType, fileName);
        this.distanceMatrix = tools.calcDistanceMatrix();
        this.changeMatrix = new double[tools.getGetCityNum()][tools.getGetCityNum()];
        this.numberOfAnts = (int) (tools.getGetCityNum() * antFactor);
        this.numberOfAnts = tools.mainDataContainer.length; // Sets number of ants to
        this.ants = new Ant[1];
    }

    private double[][] initializeMatrix(){
        double[][] pheromoneMatrix = new double[tools.getGetCityNum()][tools.getGetCityNum()];
        for(double[] pheromoneOnEdge : pheromoneMatrix){
            Arrays.fill(pheromoneOnEdge, INITIAL_PHEROMONE);
        }
        return pheromoneMatrix;
    }

    public void activateColony(){
        double[][] pheromoneMatrix = initializeMatrix();
        int[] unvisitedCitiesArray = new int[tools.getGetCityNum()];

        System.out.println(ants.length);

        for (int runFor = iterations; runFor > 0 ; runFor--){ // Generations
            for(int ant = 0; ant < numberOfAnts; ant++){ // Colony size
                Ant partialAnt = new Ant(distanceMatrix, pheromoneMatrix);
           //     //if(ant > 8){ partialAnt = new Ant(distanceMatrix, pheromoneMatrix, unvisitedCitiesArray.length); }
                int[] path = partialAnt.makePath((int)(Math.random() * tools.getGetCityNum()) + 1 , unvisitedCitiesArray.clone() , tools.getGetCityNum());
                if (bestDistance > partialAnt.accumulator){
                    bestDistance = partialAnt.accumulator;
                    bestPath = path;
                }
                for(int i = 0 ; i < changeMatrix.length - 1 ; i++){
                    changeMatrix[path[i]-1][path[i == changeMatrix.length -1 ? 0 : i+1 ]-1] += 1 / partialAnt.accumulator;
                }
            //    System.out.println(Arrays.toString(path));
            }

            for(int x = 0; x < changeMatrix.length; x++){
                for(int y = 0; y < changeMatrix.length; y++){
                    pheromoneMatrix[x][y] *= evaporation;
                    pheromoneMatrix[x][y] += changeMatrix[x][y];
                }
            }
        }

        bestPath = Arrays.copyOf(bestPath, bestPath.length + 1);
        bestPath[bestPath.length - 1] = bestPath[0];
        //System.out.println();
        //System.out.println("The best distance: " + bestDistance);
        //System.out.println("The best path: " + Arrays.toString(bestPath));

    }

    public double getBestDistance() {
        return bestDistance;
    }

    public int[] getBestPath() {
        return bestPath;
    }
}
