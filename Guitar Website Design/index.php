<?php 
    include('common.php'); 
    //include('test.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <?php load_header('Home'); ?>
    </head>
    <?php include_all(); ?>
    <body id="main">
        <div class="grid_container">
            <!--==================================TITLE========================================-->
            <?php load_title(); ?>
            <!--==================================MENU BAR========================================-->
            <?php load_nav('Home'); ?>
            <!--==================================CONTENT SECTION========================================-->
            <div class="content">
                <div id="ui_error_space"></div>
                <h1 class="content_sub1 text_preset_title">Welcome to Guitars for You!</h1>
                <br>
                <div class="content_sub1 text_preset_base" id="content_bill_container">
                    <button type="button" class="content_ad_button1" style="margin-left: auto;" for="ad_board_space" onclick="button_select_image('add')">&lt</button>
                    <div class="ad_board" id="ad_board_space"><img id="ad_board_image" src="Assets/board/slide1.jpg" ></div>
                    <button type="button" class="content_ad_button1" style="margin-right: auto;" for="ad_board_space" onclick="button_select_image('sub')">&gt</button>
                </div>
                <hr>
                <h1 class="content_sub1 text_preset_title" style="padding-right: 85%;">Recently Viwed</h1>
                <hr>
                <div class="content_sub1 text_preset_base" id="content_recent_container">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </div>
            </div>
            <!--==================================SIDE PANNEL========================================-->
            <?php load_right(); ?>
            <!--==================================FOOTER========================================-->
            <?php load_footer(0);?>
        </div>
    </body>
</html>