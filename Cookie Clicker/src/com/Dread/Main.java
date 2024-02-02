package com.Dread;
import java.awt.*;
import javax.swing.*;
import javax.sound.sampled.*;
import java.awt.event.*;
import java.io.File;
// import java.util.concurrent.atomic.AtomicInteger;

// This work belong to Aleksandrs Lukjanovs and is a hobby project.

// Plans:
// - Add auto clicker.
// - Add combo click. Where you must stop clicking at red and if you do you get a random click challenge
//   the challenge would multiply your clicks by 15 to 20 times depending on your current multiplier.
// - Add music and image.
// - Add cool background image.
// - Add lives.
// - Do a write up with ui layout.
// - Add custom cursor.




public class Main {

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new Plane(400, 600));
    }
}
