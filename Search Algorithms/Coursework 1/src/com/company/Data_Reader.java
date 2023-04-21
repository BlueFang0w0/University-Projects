package com.company;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Arrays;

public class Data_Reader {
    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ANSI_CYAN = "\u001B[36m";

    final private String fileName;
    final private String fileExtension;
    final private String filePath = System.getProperty("user.dir");
    private int cityNum = 0;
    private int cityBuffer = 100;
    private int[][] citiesData = new int[cityBuffer][3];
    int lineTracker = 0;
    int linePosition = 0;
    String numberAssembly = "";
    boolean running = true;

    Data_Reader(String fileName, String fileExtension){
        this.fileName = fileName;
        this.fileExtension = fileExtension;
    }

    public void triggerInsurance(){ //Expands the array if the limit is reached.
        if(cityNum == citiesData.length -1){
            citiesData = Arrays.copyOf(citiesData, (cityBuffer *= 2));
        }
    }

    private void updateVals(){
        linePosition = (linePosition + 1)%3;
        if(linePosition == 0){
            lineTracker++;
        }
    }

    public void updateCityNum(int newCityNum){
        cityNum = newCityNum;
    }


    public void shrinkArr(){
        citiesData = Arrays.copyOf(citiesData, cityNum);
    }

    public int[][] readData(){

        boolean dataNOTLock = false;
        boolean dataPresent = false;
        int prevRawDataStream = 0;

        try{
            File myFile = new File(filePath + "/" + fileName + fileExtension);
            BufferedReader dataReader = new BufferedReader(new FileReader(myFile));

            //char by char variable container / holds asci values.
            int rawDataStream;

            boolean isSpace = true;

            while(running){
                //gets next char in stream
                rawDataStream = dataReader.read();
                System.out.println(rawDataStream);

                if( rawDataStream >= 45){
                    isSpace = false;
                    numberAssembly += (char) rawDataStream;
                }

                else if(isSpace == false){
                        citiesData[lineTracker][linePosition] = Integer.parseInt(numberAssembly);
                        numberAssembly = "";
                        updateVals();
                        updateCityNum(lineTracker);
                        triggerInsurance();
                        isSpace = true;
                }

             //   prevRawDataStream = rawDataStream;
                if (rawDataStream == -1){ running = false;}

            }


        } catch (FileNotFoundException e) {
            System.out.println(ANSI_CYAN + "System: Error file not found at: " + filePath + "\\TEMP" + fileName + fileExtension + ANSI_RESET);
            System.out.println(e);
        } catch (java.io.IOException e){
            System.out.println(ANSI_CYAN + "System: IOException found." + ANSI_RESET);
            System.out.println(e);
        } catch (java.lang.NumberFormatException e){
            System.out.println(ANSI_CYAN + "System: Number format exception!" + ANSI_RESET);
            System.out.println(e);
        } finally {
            System.out.println(ANSI_CYAN + "System: Data load complete." + ANSI_RESET);
        }
        shrinkArr();


        return citiesData;


    }
}
