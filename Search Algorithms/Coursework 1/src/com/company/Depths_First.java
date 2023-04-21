package com.company;

import org.w3c.dom.ls.LSOutput;

import java.util.Arrays;
import java.lang.Math;

public class Depths_First {
    private int cityNum;
    double[][] distanceMatrix;
    double shortestPath = 999999999.999999999999999999999999999999999999999999999999999999999; // To allow for improvement.
    int[] shortestPathOrder;
    int[] globalVisited;
    Utils_Code tools; // Contains commonly re-usable code such as calculating euclidian matrix.

    Depths_First(String fileName, String fileType){ // Constructor.
        this.tools = new Utils_Code(fileName, fileType);
        cityNum = tools.mainDataContainer.length;
        distanceMatrix = tools.calcDistanceMatrix();
        globalVisited = new int[cityNum];
    }

    private int[] makeNeighbours(int currentCityNumber){ //2 = [1,1,0,0]  <-- Places 1 at position 2.
        int[] neighbours = new int[cityNum];
        neighbours[0] = 1;
        neighbours[currentCityNumber - 1] = 1;
        return neighbours;
    }

    private int makeDecision(int[] globalVisited , int[] unvisitedNeighbours){ // Makes decision where to go.
        int decisionCity = -1;
        for(int i = 0 ; i < cityNum ; i++){
            if(globalVisited[i] == 0 && unvisitedNeighbours[i] == 0){ // Rule for decision where to compares unvisited and visited to make sure there is a space.
                decisionCity = i + 1;
                break;
            }
        }
        return decisionCity;
    }

    public void search(){
        Stack path = new Stack(); //Create my path.
        path.push(1 , makeNeighbours(1) , 0.0);
        Node currentNode = path.head;
        globalVisited[0] = 1;
        int nextCity = 0;
        boolean backtracking = false;

        while(path.head != null){ // If head is missing.

            if(makeDecision(globalVisited , currentNode.getUnvisitedNodes()) != -1){
                backtracking = false;
                nextCity = makeDecision(globalVisited , currentNode.getUnvisitedNodes()); //Temp container for where to go next.
                globalVisited[nextCity - 1] = 1; //Sets the visited city to 1.
                int[] tempNeighbours = currentNode.getUnvisitedNodes();
                tempNeighbours[nextCity - 1] = 1; // Updates local inside a node.
                currentNode.setUnvisitedNodes(tempNeighbours);
                path.push(nextCity , makeNeighbours(nextCity) , currentNode.getAccumulatedPathLength() + distanceMatrix[currentNode.getCityNumber()-1][nextCity-1]);
                currentNode = path.head; //Updates the head as it is locally referenced.
            }else {
                if ((path.head.getAccumulatedPathLength() + distanceMatrix[currentNode.getCityNumber()-1][0]) < shortestPath && backtracking == false){
                    shortestPathOrder = path.getPath();
                    shortestPath = path.head.getAccumulatedPathLength() + distanceMatrix[currentNode.getCityNumber()-1][0];
                }
                backtracking = true;
                globalVisited[currentNode.getCityNumber() - 1] = 0;
                path.pop();
                currentNode = path.head;
            }
        }

        System.out.println("Path: " + Arrays.toString(shortestPathOrder) + " Length: " + shortestPath);
    }
}
