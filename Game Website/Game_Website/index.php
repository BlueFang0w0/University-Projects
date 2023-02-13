<!-- First need to load the php. -->
<?php
include('Common.php');
load_header('Home');
load_navigation('Home');
include_all(); // Just adding all my scripts.
?>

<!-- I create a mini container for my middle content and use grid to position things. -->
<div class="mini_container">
            <div class="content"></div>
            <div id="mid_content" >
            
                <div id="ui_interaction_container"> <!-- Then I make a container for the user interaction which allows for log-in and register. -->
                    <div id="ui_error_space" class="text_preset"></div>
                    <div id="ui_login_group" style="padding: 0;"></div> <!-- I create two div groups which I need to positon my stuff when I load it with my script. -->
                    <div id="ui_register_group" style="padding: 0;"></div>
                    <div id="ui_rol_interface"> <!-- Now I make the actual controls inside the container. -->
                        <button type="button" id="ui_log_A" class="ui_low_button" onclick="revealLog()"  style="left: 40%; top: 40%;">Log In</button>
                        <p id="OR_reg_page_text" style="position:relative; top:45%; left: 45%; font-size: 30px; font-family: Arial, Helvetica, sans-serif; "><b>OR</b></p>
                        <button type="button" id="ui_reg_A" class="ui_low_button" onclick="revealReg()" style="left: 36%; top: 50%;">Register Now</button></div>
                </div>    
            
                </div>
                <div class="content"></div> <!-- These are needed for grid alighnmenet and so it's easier to see. -->
                <div class="content"></div>
                <div class="content"></div>
                </div>
        
    

    
</div>
</div>
<!-- Must never forget the footer. -->
<?php load_footer(); ?>
</div>
</body>
</html>
 