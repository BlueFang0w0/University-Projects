<!-- First need to load the php. -->
<?php
include('Common.php');
load_header('Game');
load_navigation('Game');
include_all(); // Just adding all my scripts.
?>

<!-- I now create a grid and use it to split up my game_container into two. -->
<div class="game_container"> 
    <div id="controls"> 
        <button class="game_sl_control_button" style="float:left;"></button>  <!--  With more adjustmenet I then position my future slide show. -->
        <img id="game_controls_sl" src="Assets/Mouse_Keyboard.svg" >
        <button class="game_sl_control_button" style="float:right;"></button> 
    </div>

    <!--  Then use the other half of my grid for my canvas. -->
    
    <div id="game_space"><div id="mySpace_clock"><b>TIME: 0</div><canvas id="mySpace" width="100%" height="100%" ;></canvas></div>
    <script src="Java_Script/missionControl.js"></script>

</div>
</div>
<!--  Must not forget to load the footer. -->
<?php load_footer(); ?>

</div>

<img id="imgCon_Crimson_Stratos" class="imgCon" src="Assets/Game_Assets/Crimson_Stratos.svg"> 
<img id="imgCon_Blue_Chronos" class="imgCon" src="Assets/Game_Assets/Blue_Cronos.png"> 
</body>
</html>