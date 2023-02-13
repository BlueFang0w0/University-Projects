<?php 

function load_header ($title){ // This is a function that re-uses the header but uses $title var input to change page name.
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    echo '<meta charset="UTF-8">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo '<title>' . $title . '</title>';
    echo '<link rel="stylesheet" href="CSS/index.css" type="text/css">';
    echo '</head>';
    echo '<style>';
    echo '</style>';
    echo '<body id="root_body" onload="on_load_func(\'' . $title .'\')">';
    
}
// I use this function to allow my color to change on nav bar based on what page I am on. This happens because my swith statement when given right input will change the style.
function load_navigation ($name) { 

    $Home = '#ffffff;';
    $About = '#ffffff;';
    $Game = '#ffffff;';
    $Scores = '#ffffff;';

    switch ($name) {
        case 'Home':
            $Home = 'orange';
            break;
        case 'About':
            $About = 'orange';
            break;
        case 'Game':
            $Game = 'orange';
            break;
        case 'Scores':
            $Scores = 'orange';
            break;
    }
    
    echo '<div class="container"  onmousemove="stick_to_mouse(event)">';
    echo '<div class="header"><img id="Nerve_Boost_Logo" src="Assets/Nerve_Boost_2.svg" ></div>';
    echo '<div class="menu_bar">';
    echo '<div class="menu_button"> <a href="index.php" class="button_link" style="color:' . $Home . '" >Home</a> </div>';
    echo '<div class="menu-divison"><img class="separator" src="Assets/RectangleSeparator.svg" ></div>';
    echo '<div class="menu_button"><a href="about.php" class="button_link" style="color:' . $About . '" >About</a></div>';
    echo '<div class="menu-divison"><img class="separator" src="Assets/RectangleSeparator.svg" ></div>';
    echo '<div class="menu_button"><a href="game.php" class="button_link" style="color:' . $Game . '"  >Game</a></div>';
    echo '<div class="menu-divison"><img class="separator" src="Assets/RectangleSeparator.svg" ></div>';
    echo '<div class="menu_button"><a href="scores.php" class="button_link" style="color:' . $Scores . '"  >Scores</a></div>';
    echo '</div> ';
}

function include_all(){
echo '<script src="Java_Script/log_in_animator.js"></script>';
echo '<script src="Java_Script/register_animator.js"></script>';
echo '<script src="Java_Script/logo_hovr_anima.js"></script>';
echo '<script src="Java_Script/reg_verify.js"></script>';
echo '<script src="Java_Script/on_load.js"></script>';
}

function load_footer() { // This very simply allows me to re-use my footer without remaking it. 
    echo '<div class="footer">';
    echo '<div class="footer_refr" > ';
    echo '<a  href="https://www.twitch.tv/"><img src="Assets/Twitch_Icon.svg"></a> ';
    echo '<a  href="https://www.youtube.com/?gl=GB"><img src="Assets/Youtube_Icon.svg" ></a> ';
    echo '</div>';
    echo '<div class="footer_refr text_preset" id="footer_text"> © 2020–2020 NerveBoost.net All rights reserved. Powered by Middlesex University™. This is a university project where one must make a website containing a game. © </div>';
    echo '<div class="footer_refr music_player" >';
    echo '<audio id="music_player" controls><source src="http://localhost/Game_Website/Assets/VOne.mp3" type="audio/ogg"></audio>';
    echo '</div>';
   
}