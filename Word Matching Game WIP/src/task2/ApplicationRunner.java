package task2;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.PushbackReader;
import java.util.*;

public class ApplicationRunner {

    public static String hide(int largest){
        String displayNow = "";
        for(int i = largest ; i > 0 ; i--){
            displayNow += "@";
        }
        return displayNow;
    }

    public static void show(int largest , String display, String word){
        display = "";
        for(int i = 0 ; i < largest ; i++){
            if(word.length() > i){
                display += word.charAt(i);
            }else{display += " ";}
        }
    }

    public static int allocateR(int xBoundary, int yBoundary, int num ){
        int space = xBoundary * yBoundary;
        int myNum = num;
        int y = 0;
        for(int i = 0 ; (myNum - xBoundary) > 0 ;  i++) {
            myNum = myNum - xBoundary;
            y++;
        }
       int row = myNum;
       int column = y;
        return row;
    }

    public static int allocateC(int xBoundary, int yBoundary, int num ){
        int space = xBoundary * yBoundary;
        int myNum = num;
        int y = 0;
        for(int i = 0 ; (myNum - xBoundary) > 0 ;  i++) {
            myNum = myNum - xBoundary;
            y++;
        }
        int row = myNum;
        int column = y;
        return column;
    }

    public static void clearScreen(){
        for(int i = 0 ; i < 2000 ; i++){
            System.out.println("\n");
        }
    }
 
    public static void main(String[] args) {
        Scanner userDatastream = new Scanner(System.in);

        String dataFormat = ".txt";
        String dir = System.getProperty("user.dir");
        String commonLink = "wordContainer";
        String dataContainer = "";
        int userInput = 0;
        int highScore = 0;
        int gameScreenW = 5;
        int gameScreenY = 0;
        int availableSpace = gameScreenY * gameScreenW;
        int largestWordS = 0;
        int limit = 0;
        int rawDataStream;
        int memmoryTime = 5;
        int trueCount = 0;
        boolean runningGate0 = true;
        boolean runningGate1 = true;
        boolean runningGate2 = false;
        boolean runningGate3 = true;


        File easy = new File(dir + "\\" + "small" + dataFormat);
        File medium = new File(dir + "\\" + "medium" + dataFormat);
        File hard = new File(dir + "\\" + "large" + dataFormat);
        File difficulty = new File("");

        while(runningGate0){
            userInput = 0;
            while(runningGate1){
                System.out.println("====================================================");
                System.out.println("=========WELCOME TO THE WORD MATCHING GAME!=========");
                System.out.println("====================================================");
                System.out.println("");
                System.out.println("To select an option type a number in and press enter.");
                System.out.println("");
                System.out.println("1.Easy = :D");
                System.out.println("2.Medium = >:)");
                System.out.println("3.Hard = >:(");
                System.out.println("4.Instructions");
                System.out.println("5.Exit");
                System.out.println("");
                System.out.println("The current high-score is: " + highScore);
                userInput = userDatastream.nextInt();
                userDatastream.nextLine();
                if (userInput == 1 || userInput == 2 || userInput == 3 || userInput == 4 || userInput == 5){break;}
            }
           clearScreen(); //I figgured this is a more than adequate way of cleaning the console. If you are that intent on cheating by scrolling up 2000 lines. I can't really stop you.

            switch(userInput){
                //Option 1.
                case 1:
                    difficulty = easy;
                    runningGate0 = true;
                    runningGate1 = true;
                    runningGate2 = true;
                    runningGate3 = true;
                    break;
                //Option 2.
                case 2:
                    difficulty = medium;
                    runningGate0 = true;
                    runningGate1 = true;
                    runningGate2 = true;
                    runningGate3 = true;
                    break;
                //Option 3.
                case 3:
                    difficulty = hard;
                    runningGate0 = true;
                    runningGate1 = true;
                    runningGate2 = true;
                    runningGate3 = true;
                    break;
                //Option 4.
                case 4:
                    System.out.println("");
                    System.out.println(" The goal of the game is to match all the words that are hidden by the symbols '@'. \n You need to do it in as few tries as possible. \n To be able to guess you need to type in the x and y co_ordinates of your fist pick, followed by your guess \n to which you assume it matches. \n The high-score is shown at the end of the game.");
                    userDatastream.nextLine();
                    clearScreen();
                    break;
                //Option 5.
                case 5:
                    runningGate0 = false;
                    runningGate1 = false;
                    runningGate2 = false;
                    runningGate3 = false;
                    break;
            }

            if (runningGate2 == true){

             //   try{
          //          PushbackReader fileReceiver = new PushbackReader(new FileReader(difficulty) , 2);
         //           while ((rawDataStream = fileReceiver.read()) != -1){

         //               dataContainer += (char) rawDataStream;

         //           }
        //            fileReceiver.close();
       //         }catch (java.io.FileNotFoundException e){ // Double error handling.
        //            System.out.println("ERROR: NoFile !");
       //         }catch (java.io.IOException e) {
        //            System.out.println("ERROR: IOExe !");
       //         }catch (java.lang.NumberFormatException e){
       //             System.out.println("ERROR: NumForExe !");
        //            throw e;
       //         }
      //          String[] sections = dataContainer.trim().split("\\n+");
                ArrayList<String>  mylist = new ArrayList<String>();

                Scanner fileIn = null;
                try{

                    fileIn = new Scanner(difficulty);
                    while(fileIn.hasNext()){
                        String currentName = fileIn.nextLine();
                        mylist.add(currentName);
                        mylist.add(currentName);
                    }

                }catch (java.io.FileNotFoundException e){}
                finally{fileIn.close();}
                System.out.println(mylist);


             //  for(int i = 0 ; i < realSpace ; i ++){ //Convert into a large list for shufling.
               //         mylist.add(sections[i]);
                 //       mylist.add(sections[i]);
                   //     if (sections[i].length() > largestWordS){
                     //       largestWordS = sections[i].length();
                       // }
             //   }

                int boardSize = (int) Math.sqrt(mylist.size());

                String[][] gameSpaceBottom = new String[boardSize][boardSize]; //My idea is to essentially just pass values from bottom layer to top.
                String[][] gameSpaceTop = new String[boardSize][boardSize]; //

               // if (mylist.size() == realSpace*2){
               //     System.out.println("Test Passed!");
              //  }else{
              //      System.out.println(largestWordS);
               //     System.out.println(mylist.size());
               //     System.out.println(realSpace*2);
               //     System.out.println("Fail!");
               // }

                while(runningGate3 == true){
                    Collections.shuffle(mylist);

                    int arrayIter = 0;

                    for(int i = 0 ; i > gameSpaceBottom.length ; i++){

                        for(int j = 0 ; j > gameSpaceBottom[i].length ; j++){

                            gameSpaceBottom[i][j] = mylist.get(arrayIter);
                            gameSpaceTop[i][j] = hide(largestWordS);
                            arrayIter++;

                        }

                    }

                    System.out.println(Arrays.deepToString(gameSpaceBottom) + "\n");
                    System.out.println(Arrays.deepToString(gameSpaceTop));
                    System.out.println(gameSpaceBottom[0][0]);

                    //GAME CODE
                    for (int i = 0 ; i < gameScreenY ; i++){
                        for(int x = 0 ; x < gameScreenW ; x++){

                            System.out.print("[" + gameSpaceBottom[i][x] + "]");

                        }
                        System.out.println("");
                    }
                    userDatastream.nextLine();
                }


            }

        }

	}

}
