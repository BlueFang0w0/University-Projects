package com.company;

public class Best_First {
    Data_Reader dataReader;
    int[][] mainDataContainer;
    int cityNum;
    int[] bestPath;

    Best_First(String fileName, String fileType){ // Constructor
        this.dataReader = new Data_Reader(fileName, fileType);
        mainDataContainer = dataReader.readData();
        cityNum = mainDataContainer.length;
    }

    public double distanceCalculator(int x1, int y1, int x2, int y2){ //Distance calculator for the euclidian matrix.
        return  Math.sqrt(Math.pow((x1 - x2) , 2) + Math.pow((y1 - y2) , 2));
    }

    public double[][] calcDistanceMatrix(){ // Create a distance matrix between point A and point B.
        double[][] distanceMatrix = new double[cityNum][cityNum];

        for(int i = 0; i < cityNum; i++){
            for(int ii = 0; ii < cityNum; ii++){
                int x1 = mainDataContainer[i][1];
                int y1 = mainDataContainer[i][2];

                int x2 = mainDataContainer[ii][1];
                int y2 = mainDataContainer[ii][2];

                if(distanceCalculator(x1, y1, x2, y2) < distanceCalculator(x1, y1, x2, y2)){}
                distanceMatrix[i][ii] = distanceCalculator(x1, y1, x2, y2);
            }
        }
        return  distanceMatrix;
    }
}
