package com.company;
import static java.lang.System.exit;

public class Stack {

    Node head; //Gotta create the node ref.


    Stack() {
        this.head = null;
    } //Constructor setting this root to nothing.

    public void push(int cityNumber, int[] unvisitedNodes , double accumulatedPathLength) {
        Node temp = new Node(cityNumber, unvisitedNodes, accumulatedPathLength , head);//Create a new node to be pushed in.
        head = temp;
    }

    public int pop() {
        int cityNum = head.getCityNumber();
        head = head.getChildNode();
        return cityNum;
    }

    public Node peek(){ //Just see the top element.
        return head;
    }

    public int[] getPath() {
        int cityNum = head.getUnvisitedNodes().length;
        int[] doYouKnowDaWae = new int[cityNum];
        Node temp = head;
        while(temp != null){
            cityNum--;
            doYouKnowDaWae[cityNum] = temp.getCityNumber();
            temp = temp.getChildNode();
        }
        return doYouKnowDaWae;
    }
}


