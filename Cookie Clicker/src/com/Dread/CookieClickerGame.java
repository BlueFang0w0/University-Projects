package com.Dread;

import java.awt.*;
import javax.swing.*;
import javax.sound.sampled.*;
import java.awt.event.*;
import java.io.File;
// import java.util.concurrent.atomic.AtomicInteger;

class UpgradeStore { // Simple store.
    private int currentCost = 100;
    private int upgradeNumber = 1;

    public int getCurrentCost(){
        return currentCost;
    }

    public int getUpgradeNumber(){
        return upgradeNumber;
    }

    public void upgradeBuy(){
        this.currentCost = (int) Math.round(currentCost * 2.25);
        this.upgradeNumber ++;
    }
}

class RadiusTest extends JComponent{ // Draws line from point to mouse.
    com.Dread.UpgradeStore store = new com.Dread.UpgradeStore();
    private int mouseX, mouseY;
    private long counter;
    private int upgradeVal = store.getUpgradeNumber();
    private int challengeMultiplier = 1; // Receives reward multiplier.
    private enum cookieState { // If click during status then debuff?
        hold,
        attensionTest,
        neutral
    }

    public RadiusTest(){
        addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                mouseX = e.getX();
                mouseY = e.getY();
                repaint();
                if(Math.sqrt(Math.pow((mouseX-getWidth()/2),2) + Math.pow((mouseY-getHeight()/2),2)) < 100){
                    updateVal();
                    counter = counter + (upgradeVal * challengeMultiplier);
                    repaint();
                    challengeMultiplier = 1; // Multiplier lasts for one click only.
                }
            }
        });

    }

    @Override
    protected  void paintComponent(Graphics g){
        super.paintComponent(g);
        if(Math.sqrt(Math.pow((mouseX-getWidth()/2),2) + Math.pow((mouseY-getHeight()/2),2)) < 100){
            g.drawLine(getWidth()/2, getHeight()/2, mouseX, mouseY);
        }
    }

    public long getCounter(){
        return counter;
    }

    public void setCounter(int value){
        this.counter = value;
    }

    public void updateVal(){
        upgradeVal = store.getUpgradeNumber();
    }

}

class Cookie extends JComponent{
    private final int width;
    private final int height;

    public Cookie(int width, int height){
        this.width = width;
        this.height = height;
    }

    @Override
    protected void paintComponent(Graphics g){
        super.paintComponent(g);
        g.setColor(new Color(255,80,50,255)); //125
        g.fillOval(getWidth()/4, getHeight()/3, width, height);

        //Image not loading -----
        ImageIcon icon =  new ImageIcon("../Images/cookie.png");
        Image cookieImage = icon.getImage();
        if (cookieImage != null){
            g.drawImage(cookieImage, 0, 0, width, height, this);
        } else{
            System.out.println("Image not loaded.");
        }
    }
}

class CookieBorder extends JComponent{
    private final int width;
    private final int height;

    CookieBorder(int width, int height){
        this.width = width;
        this.height = height;
    }

    @Override
    protected void paintComponent(Graphics g){
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        g2d.setColor(new Color(0, 255, 50, 0));
        g2d.setStroke(new BasicStroke(5));
        g2d.drawOval(getWidth()/4, getHeight()/3, width, height);
    }
}

class Challenge { // Use this to issue a challange.
    public void redLight(){

    }

    public void greenConfirm(){

    }

    public void reward(){

    }
}

class Plane extends  JFrame{
    int[] cookieSize = {200,200};
    com.Dread.RadiusTest radiusTest = new com.Dread.RadiusTest();

    Plane(int width, int height){
        this.setSize(width,height);
        this.setLocationRelativeTo(null);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(null);

        JLayeredPane layered_pane = getLayeredPane(); //Implement layered pane.
        Font labelFont = new Font("Arial",Font.BOLD, 25);

        JButton btn1 = new JButton("Reset"); //Create object.
        btn1.setBounds(getWidth() /2,getHeight() - 75,getWidth()/2,30); //Constrain it to a position and size.
        layered_pane.add(btn1, 3); // Give it a layer.
        btn1.setBackground(Color.RED);
        btn1.addActionListener(e -> radiusTest.setCounter(0));

        JButton btn2 = new JButton("+1 Clicks " + "(" + radiusTest.store.getCurrentCost() + "cl)");
        btn2.setBounds(0,getHeight() - 75,getWidth()/2,30);
        layered_pane.add(btn2, 3);
        btn2.addActionListener(e -> {
            System.out.println("Works");
            if(radiusTest.getCounter() >= radiusTest.store.getCurrentCost()){
                radiusTest.store.upgradeBuy();
                btn2.setLabel("+1 Clicks " + "(" + radiusTest.store.getCurrentCost() + "cl)");
            }
        });

        JLabel lbl1 = new JLabel("Cookie Clicker");
        lbl1.setFont(labelFont);
        lbl1.setBounds(getWidth() /4,getHeight()/20,getWidth() - getWidth()/3,50);
        layered_pane.add(lbl1, 2);

        com.Dread.Cookie cookie = new com.Dread.Cookie(cookieSize[0],cookieSize[1]);
        cookie.setBounds(0, 0, getWidth(),getHeight());
        layered_pane.add(cookie, 0);

        com.Dread.CookieBorder cookieBorder = new com.Dread.CookieBorder(cookieSize[0],cookieSize[1]);
        cookieBorder.setBounds(0, 0, getWidth(),getHeight());
        layered_pane.add(cookieBorder, 0);

        radiusTest.setBounds(0, 0, getWidth(),getHeight());
        layered_pane.add(radiusTest, 3);

        JLabel counter = new JLabel(Long.toString(radiusTest.getCounter()));
        counter.setFont(labelFont);
        counter.setBounds(getWidth() /2,getHeight()/20 + 25,getWidth() - getWidth()/3,50);
        layered_pane.add(counter, 2);

        Timer timer = new Timer(100, e -> {
            counter.setText(Long.toString(radiusTest.getCounter()));
            repaint();
        });
        timer.start();

        this.setVisible(true);
        this.validate();
    }
}

