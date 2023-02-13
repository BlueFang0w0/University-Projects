<!-- First need to load the php. -->
<?php
include('Common.php');
load_header('Scores');
load_navigation('Scores');
include_all(); // Just adding all my scripts.
?>

<!-- I make a container for my mid content. -->
<div id="score_container_main">  
    <div id="scoreboard_space"> <!-- Designate space for my scoreboard in the grid. -->
        <div id="score_nav"> <div class="score_nav_tag text_preset">Position:</div> <div class="score_nav_tag text_preset">Name:</div> <div class="score_nav_tag text_preset">Score:</div> </div>
        <div id="scores_data_container"> <!-- My space has two main parts which is score_nav and scores_data_container one is for labeling and the other is to fill up with data. -->
            
        </div> 
        <!-- Player score can not function untill the game exists. But here is an example of what it would look like. -->
        <div id="player_score"> <div class="player_score_tag text_preset">n/a</div> <div class="player_score_tag text_preset">Guest</div> <div class="player_score_tag text_preset">n/a</div> </div>
    </div> 
    
</div>
</div>
<!-- Never forget the footer and the script to actually fill my scoreboard. -->
<script src="Java_Script/score_datastream.js"></script>
<?php load_footer(); ?>
</div>
</body>
</html>