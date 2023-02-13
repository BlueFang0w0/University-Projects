<!-- First need to load the php. -->
<?php
include('Common.php');
load_header('About');
load_navigation('About');
include_all(); // Just adding all my scripts.
?>

<!-- Now I make a div for my content and edit it with css class and id. This one is pretty simple as it mainly just makes grids and formats text. -->
<div id="about_container"> 

    <div id="about_game" class="text_preset">
    The game is about the future where you are a test pilot of a new experimental technology. The technology closely links machine and body. The concept is you are a testing various frames that are a kind of future transportation system almost like mecha but you need to keep your self syncronized with the machine by matching various beat patterns while micro managing your machine.
    <br>
    <br>The better you match the patterns, the better control you have of the machine. 
    <br>
    <br>Matching beat patterns affects the following:
    <br>- Speed.
    <br>- Ease of handling.
    <br>- Clarity of controls, where there is a chance you loose control of the frame for a second or so depending on how syncronized you are.</div>

<!--  These are placeholder images for the future when I actually have the game done. These are meant to include the game images. -->
    <div class="image_placeholder">IMAGE OF THE GAME WILL BE HERE!!!</div>
    <div class="image_placeholder">IMAGE OF THE GAME WILL BE HERE!!!</div>
    <div class="image_placeholder">IMAGE OF THE GAME WILL BE HERE!!!</div>
    

</div>

</div>
<!-- Must not forget to load the footer. -->
<?php load_footer(); ?>
</div>

</body>
</html>