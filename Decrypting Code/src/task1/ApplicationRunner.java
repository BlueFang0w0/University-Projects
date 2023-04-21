package task1;

import java.io.File;

import javax.sound.sampled.Line;
import javax.xml.crypto.Data;
import java.io.*;
import java.util.Scanner;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Iterator;


public class ApplicationRunner {

    public static void main(String[] args) {

        //Definitions.
        char[] V = new char[]{'a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y'};
        char[] C = new char[]{'b', 'B', 'c', 'C', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'v', 'V', 'w', 'W', 'x', 'X', 'z', 'Z'};
        String DataFormat = ".txt";
        String InputName = "datafile";
        String OutputName = "results";
        String Dir = System.getProperty("user.dir");
        String Switch = "";
        boolean Active = false;
        int Counter = 0;
        int SpaceAccumulator = 0;
        int LineBreakAccumulator = 0;
        int RunTime = 0;
        ArrayList<Character> myRAM = new ArrayList();
        File myFile = new File(Dir + "\\TEMP" + DataFormat);

        try {
            PushbackReader RunTimeReader = new PushbackReader(new FileReader(Dir + "\\" + InputName + DataFormat));
            FileWriter myWriterTemp = new FileWriter(myFile);
            FileWriter myWriter = new FileWriter(Dir + "\\" + OutputName + DataFormat);

            int raw_datastream_OUT;
            while((raw_datastream_OUT = RunTimeReader.read()) != -1) { //Runs ahead and gets data for another reader.
                RunTime += 2;
                myWriterTemp.write(raw_datastream_OUT);
            }

            if (RunTimeReader.read() == -1) {
                myWriterTemp.write(86); //For precision purposes.
                myWriterTemp.close();
                PushbackReader myReader = new PushbackReader(new FileReader(myFile), 5); //Get the actual file.
                RunTimeReader.close();

                for(; RunTime > 0; --RunTime) {  //Beggins main program loop. Which finds the V or C and sets a mode.
                    raw_datastream_OUT = myReader.read();
                    char datastream_OUT = (char)raw_datastream_OUT;
                    if (!Active) { //Swtich
                        if (raw_datastream_OUT == 86 | raw_datastream_OUT == 118) { //I detect ascii.
                            Switch = "V";
                            Active = true;
                            ++Counter;
                        } else if (raw_datastream_OUT == 67 | raw_datastream_OUT == 99) {
                            Switch = "C";
                            Active = true;
                            ++Counter;
                        } else if (raw_datastream_OUT == 32) {
                            myWriter.write(32);
                            System.out.print(' ');
                        } else if (raw_datastream_OUT == 10 | raw_datastream_OUT == 13 && raw_datastream_OUT == 10) {
                            myWriter.write("\n");
                            System.out.print("\n");
                        }
                    } else if (!(raw_datastream_OUT == 86 | raw_datastream_OUT == 118 | raw_datastream_OUT == 67 | raw_datastream_OUT == 99)) {
                        if (raw_datastream_OUT == 32) { //If switch is Active then I am working on looking for next V or C and use them as cut off.
                            ++SpaceAccumulator;
                        } else if (raw_datastream_OUT == 10 | raw_datastream_OUT == 13) {
                            if (raw_datastream_OUT == 10) {
                                ++LineBreakAccumulator;
                            }
                        } else {
                            myRAM.add(datastream_OUT);
                        }
                    } else {
                        myReader.unread(raw_datastream_OUT); //I undread if I find the cuttoff.
                        Active = false;
                        String char_accumulator = "";

                        for(Iterator translator = myRAM.iterator(); translator.hasNext(); char_accumulator = char_accumulator + translator.next()) {
                        }

                        int int_accumulator = Integer.parseInt(char_accumulator);
                        if (Switch == "V") { //Everything below convers to the data that I need and saves it.
                            myWriter.write(V[int_accumulator - 1]);
                            System.out.print(V[int_accumulator - 1]);
                        } else {
                            myWriter.write(C[int_accumulator - 1]);
                            System.out.print(C[int_accumulator - 1]);
                        }

                        while(SpaceAccumulator > 0) {//Handles spam.
                            myWriter.write(32);
                            System.out.print(' ');
                            --SpaceAccumulator;
                        }

                        while(LineBreakAccumulator > 0) { //Handles spam.
                            myWriter.write("\n");
                            System.out.print("\n");
                            --LineBreakAccumulator;
                        }

                        myRAM.clear();
                        raw_datastream_OUT = 0;
                        SpaceAccumulator = 0;
                    }
                }

                myReader.close(); //Clean up.
                myWriter.close();
                myFile.delete();
            }
        } catch (FileNotFoundException var24) {
            System.out.println("ERROR: NoFile !");
        } catch (IOException var25) {
            System.out.println("ERROR: IOExe !");
        } catch (NumberFormatException var26) {
            System.out.println("ERROR: NumForExe !");
            throw var26;
        }

	}

}
