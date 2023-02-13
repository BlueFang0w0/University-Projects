<?php

function load_header($pageName){
    echo '<meta charset="utf-8">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo '<link rel="stylesheet" href="CSS/master.css">';
    echo '<link rel="preload" as="image" href="Assets/Search_Icon_1.svg">';
    echo '<link rel="preload" as="image" href="Assets/Search_Icon_2.svg">';
    echo '<link rel="preload" as="image" href="Assets/Search_Icon_3.svg">';
    echo '<link rel="preload" as="image" href="Assets/Logo.svg">';
    echo '<title>'. $pageName .'</title>';
}

function load_title(){
    echo '<div class="title">';
    echo '<img src="Assets/Logo.svg" id="main_logo">';
    echo '<div></div>';
    echo '<div></div>';
    echo '<div id="clock" class="text_preset_title">Current Time:</div>';
    echo '</div>';
}

function load_nav($pageName){

    $Home = 'white';
    $About = 'white';
    $Shop = 'white';

    switch ($pageName) {
        case 'Home':
            $Home = 'orange';
            break;
        case 'About':
            $About = 'orange';
            break;
        case 'Shop':
            $Shop = 'orange';
            break;
    }

    echo '<div class="menu_bar" onload="clear_reg_cache();">';
    echo '<a href="index.php" class="button_link " id="menu_bar_home_button" style="color:'. $Home .';" >Home</a>';
    echo '<a href="shop.php" class="button_link " style="color:'. $Shop .';" >Shop</a>';
    echo '<a href="about.php" class="button_link " style="color:'. $About .';" >About</a>';
    echo '<input placeholder="Search With: Tag or Name" id="search" type="search">';
    echo '<button type="button" id="search_submit" class="ui_button_preset" onclick=" ">';
    echo '<img src="Assets/Search_Icon_1.svg" ></button>';
    echo '</div>';
}

function load_right(){
    echo '<div id="special">';
    echo '<div>';
    echo '<div class="text_preset_title special_top_titles">LOG IN</div>';
    echo '<div class="text_preset_base">';
    echo '<input class= "user_input_N_P_preset special_ui_auth text_preset_base" placeholder="Email" id="email" type="email" autocomplete="login">';
    echo '<input class= "user_input_N_P_preset special_ui_auth text_preset_base" placeholder="Password" id="password" type="password" autocomplete="password">';
    echo '<button type="button" id="special_ui_auth_submit" class="button_preset text_preset_base" onclick=" ">Log In</button>';
    echo '<button type="button" id="special_ui_auth_submit" class="button_preset text_preset_base" onclick="window.location.href=\'register.php\'">Register</button>';
    echo '</div>';
    echo '</div>';
    echo '<hr>';
    echo '<div>';
    echo '<div class="text_preset_title special_top_titles">BASKET</div>';
    echo '<div class="text_preset_base">';
    echo '<div id="special_ui_basket_data" class="text_preset_base" >';
    echo '';
    echo '<button type="button" class="text_preset_base basket_item_button_preset" onclick=" ">1x Jimi Hendrix Guitar + Strap | £6000</button>';
    echo '</div>';
    echo '<div id="special_ui_basket_util" class="text_preset_base" >';
    echo '<hr>';
    echo '<button type="button" id="special_ui_basket_chkout" class="button_preset text_preset_base" onclick=" ">Checkout</button>';
    echo '<button type="button" id="special_ui_basket_chkout" class="button_preset text_preset_base" onclick=" ">Remove Item</button>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
}

function load_footer($adminMode){
    echo '<div class="footer">';
    echo '<div>';
    echo '<a  href="https://www.twitch.tv/"><img src="Assets/Twitch_Icon.svg"></a>';
    echo '<a  href="https://www.youtube.com/?gl=GB"><img src="Assets/Youtube_Icon.svg" ></a>';
    echo '</div>';
    echo '<div class="text_preset_base" style="max-width: 40%;"> © 2021–2021 GFU.net All rights reserved. Powered by Middlesex University™. This is a university project where one must make an e-commerce website. This website is NOT official. © </div>';
    if($adminMode == 1){
        echo '<div><button type="button" id="footer_admin_access_button" class="button_preset text_preset_base" onclick="window.location.href=\'index.php\'">Exit Administrator Menu</button></div>';
    }else{
        echo '<div><button type="button" id="footer_admin_access_button" class="button_preset text_preset_base" onclick="window.location.href=\'admin.php\'">Administrator Menu</button></div>';
    }
    echo '</div>';
}

function include_all(){
    echo '<script src="Java_Script/admin_inner.js"></script>';
    echo '<script src="Java_Script/home_adb_anima.js"></script>';
    echo '<script src="Java_Script/auto_run_que.js"></script>';
    echo '<script src="Java_Script/registration_animator.js"></script>';
    echo '<script src="Java_Script/basket_animator.js"></script>';
}