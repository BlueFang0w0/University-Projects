package com.company;
import java.util.Arrays;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Regex_Test {

    public void TestScenario(){
        int count = 0;
        int count2 = 0;
        Matcher m = Pattern.compile("-{0,1}[0-9]+(\\.[0-9]*){0,1}").matcher("1 2 3 4 5  6");
        while(m.find()){
            count ++;
        }
        String[] Stuff = new String[count];
        while (m.find()) {
            Stuff[count2] = m.group();
            count2 ++;
        }
        System.out.println(m.matches());
        System.out.println(Stuff[2]);
    }
}
