package com.Dread;

import java.awt.*;
import javax.swing.*;
import java.awt.event.*;
// import java.util.concurrent.atomic.AtomicInteger;

// TITLE: PRIMARY MODULES TO BE ASSEMBLED IN THE CANVAS

// ----------==== Store Module ====---------------
class UpgradeStore {
    private int currentCost = 10;
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
// =========================================================== ED

// ----------==== Radius Test Module ====---------------
class RadiusTest extends JComponent{ // Draws line from point to mouse.
    com.Dread.UpgradeStore store = new com.Dread.UpgradeStore();
    private int mouseX, mouseY;
    private long counter;
    private int upgradeVal = store.getUpgradeNumber();
    private int challengeMultiplier = 1; // Receives reward multiplier.

    public RadiusTest(){ // I test if the click is within the radius of the cookie.
        addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) { // Can stack additional events onto the test.
                mouseX = e.getX();
                mouseY = e.getY();
                repaint();
                if(Math.sqrt(Math.pow((mouseX-getWidth()/2),2) + Math.pow((mouseY-getHeight()/2),2)) < 100){
                    updateVal();
                    counter = counter + ((long) upgradeVal * challengeMultiplier);
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
// =========================================================== ED

// ----------==== Cookies Area or Plate ->(2)-> ====--------------- ST
class Cookie extends JComponent{
    private final int width;
    private final int height;

    public Cookie(int width, int height){
        this.width = width;
        this.height = height;
    }
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        g.setColor(new Color(0,0,0,255));
        g.fillOval(0, 0, width, height);
        g.setColor(new Color(250,250,250,255));
        g.fillOval(1, 1, width-2, height-2);
        g.setColor(new Color(0,0,0,255));
        g.fillOval(width/4, height/4, width/2, height/2);
        g.setColor(new Color(220,220,220,255));
        g.fillOval(width/4+1, height/4+1, width/2-2, height/2-2);
    }
}
// =========================================================== ED

// ----------==== WIP Functionality ====--------------- ST
class Challenge { // Use this to issue a challenge.

    public void adBreak(){ // Creates a red circle around the cookie. If you don't click then you get a bonus.

    }

    public void bugSpawn(){ // Spawns a bug which decreases cookie clicks unless clicked in which case you get 10 click.

    }

    public void tableDamage(){ // Cookie moves about.

    }

    public void burntCookies(){  // Hold the button or the cookie burns.

    }

    public void rollChallenge(int diceSize, int bugRatio, int lightRatio){ // Roll a dice and decide which challenge spawns.

    }

    public void reward(){ // Receive a reward based on click level you are at.

    }
}
// =========================================================== ED

// TITLE: CORE FUNCTIONALITY / CANVAS LAYOUT
class Plane extends JFrame {
    int[] cookieSize = {200, 200};
    RadiusTest radiusTest = new RadiusTest();

    Plane(int width, int height) {
        // ----------==== Settings ====---------------
        this.setSize(width, height);
        this.setLocationRelativeTo(null);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(null);

        JLayeredPane layeredPane = getLayeredPane(); // Implement layered pane.
        Font labelFont = new Font("Arial", Font.BOLD, 25);
        // =========================================================== ED

        // ----------==== Reset Button (root)-> ====---------------
        JButton btn1 = new JButton("Reset"); // Create object.
        btn1.setBounds(getWidth() /4, getHeight() - 75, 200, 30); // Constrain it to a position and size.
        //btn1.setBackground(new Color(255,0,0));
        btn1.addActionListener(e ->{
            btn1.setBackground(Color.DARK_GRAY); // Creates border on click.
            radiusTest.setCounter(0);
            try{
                Thread.sleep(200);
            }catch(InterruptedException ex){
                ex.printStackTrace();
            }finally{
                btn1.setBackground(Color.WHITE);
            }
        });
        // =========================================================== ED

        // ----------==== Upgrade Button (root)-> ====---------------
        JButton btn2 = new JButton("Upgrade");
        btn2.setBounds(getWidth() /4, getHeight() - 100, 200, 30);
        btn2.addActionListener(e ->{
            System.out.println("Works!");
            btn2.setBackground(Color.DARK_GRAY); // Creates border on click.
            if (radiusTest.getCounter() >= radiusTest.store.getCurrentCost()) {
                radiusTest.store.upgradeBuy();
                btn2.setText("+1 Clicks " + "(" + radiusTest.store.getCurrentCost() + "cl)");
            }
            try{
                Thread.sleep(200);
            }catch(InterruptedException ex){
                ex.printStackTrace();
            }finally{
                btn2.setBackground(Color.WHITE);
            }
        });
        // =========================================================== ED

        // ----------==== Title Label (root)-> ====---------------
        JLabel lbl1 = new JLabel("Cookie Clicker");
        lbl1.setFont(labelFont);
        lbl1.setBounds(getWidth() / 4, getHeight() / 20, getWidth() - getWidth() / 3, 50);
        // =========================================================== ED

        // ----------==== Cookies Area or Plate (root)-> ====---------------
        int cookiePosX = getWidth() / 4;
        int cookiePosY = (getHeight() / 4)+30;
        Cookie cookiePlate = new Cookie(cookieSize[0], cookieSize[1]);
        cookiePlate.setBounds(cookiePosX, cookiePosY, cookieSize[0], cookieSize[1]);
        radiusTest.setBounds(cookiePosX, cookiePosY, cookieSize[0], cookieSize[1]);
        // =========================================================== ED

        // ----------==== Button Click Detector (root)-> ====---------------
        JLabel counter = new JLabel(Long.toString(radiusTest.getCounter()));
        counter.setFont(labelFont);
        counter.setBounds((getWidth() / 2) - 15, getHeight() / 20 + 35, getWidth() - getWidth() / 3, 50);
        // =========================================================== ED

        // ----------==== Cookies Component (root)-> ====---------------
        ImageIcon cookieImage = new ImageIcon("src/Images/cookie.png");
        ImageIcon resizedCookies = new ImageIcon(cookieImage.getImage().getScaledInstance(50,50,Image.SCALE_SMOOTH));
        JLabel cookieImg = new JLabel(resizedCookies);
        cookieImg.setBounds(cookiePosX,cookiePosY,cookieSize[0], cookieSize[1]);
        cookieImg.setBorder(BorderFactory.createLineBorder(Color.black));
        // =========================================================== ED

        // ----------==== Component Layout ->(1)-> ====---------------
        layeredPane.add(btn1, JLayeredPane.DEFAULT_LAYER); // Give it a layer.
        layeredPane.add(btn2, JLayeredPane.DEFAULT_LAYER);
        layeredPane.add(lbl1, JLayeredPane.DEFAULT_LAYER);
        layeredPane.add(cookiePlate, JLayeredPane.DEFAULT_LAYER);
        layeredPane.add(radiusTest, JLayeredPane.DEFAULT_LAYER + 1);
        layeredPane.add(counter, JLayeredPane.DEFAULT_LAYER);
        layeredPane.add(cookieImg, JLayeredPane.DEFAULT_LAYER + 2);
        // =========================================================== ED

        // ----------==== Timed Data Fetcher ====---------------
        Timer timer = new Timer(100, e -> { // Canvas and data refresh.
            counter.setText(Long.toString(radiusTest.getCounter()));
        });
        timer.start();
        // =========================================================== ED

        // ----------==== EXTRA ====---------------
        this.setVisible(true);
        this.validate();
        // =========================================================== ED
    }
}

