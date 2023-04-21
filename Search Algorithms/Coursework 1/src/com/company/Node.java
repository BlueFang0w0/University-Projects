package com.company;

public class Node {
    private int cityNumber;
    private int[] unvisitedNodes;
    private double accumulatedPathLength;
    private Node childNode;

    Node(int cityNumber, int[] unvisitedNodes , double accumulatedPathLength , Node childNode){
        this.cityNumber = cityNumber;
        this.unvisitedNodes = unvisitedNodes;
        this.accumulatedPathLength = accumulatedPathLength;
        this.childNode = childNode;
    }

    public int getCityNumber() {
        return cityNumber;
    }

    public int[] getUnvisitedNodes() {
        return unvisitedNodes;
    }

    public double getAccumulatedPathLength() {
        return accumulatedPathLength;
    }

    public Node getChildNode() {
        return childNode;
    }

    public void setUnvisitedNodes(int[] unvisitedNodes) {
        this.unvisitedNodes = unvisitedNodes;
    }
}
