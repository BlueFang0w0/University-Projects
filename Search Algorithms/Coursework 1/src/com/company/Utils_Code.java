package com.company;

public class Utils_Code {

    Data_Reader dataReader;
    int[][] mainDataContainer;
    private int getCityNum;

    Utils_Code(String fileName, String fileType){
        this.dataReader = new Data_Reader(fileName, fileType);
        mainDataContainer = dataReader.readData();
        getCityNum = mainDataContainer.length;
    }

    public int getGetCityNum() {
        return getCityNum;
    }

    public double distanceCalculator(int x1, int y1, int x2, int y2){ //Distance calculator.
        return  Math.sqrt(Math.pow((x1 - x2) , 2) + Math.pow((y1 - y2) , 2));
    }

    public double[][] calcDistanceMatrix(){ // Create a distance matrix between point A and point B.
        double[][] distanceMatrix = new double[getCityNum][getCityNum];

        for(int i = 0; i < getCityNum; i++){
            for(int ii = 0; ii < getCityNum; ii++){
                int x1 = mainDataContainer[i][1];
                int x2 = mainDataContainer[ii][1];
                int y1 = mainDataContainer[i][2];
                int y2 = mainDataContainer[ii][2];
                distanceMatrix[i][ii] = distanceCalculator(x1, y1, x2, y2);
            }
        }
        return  distanceMatrix;
    }
}
