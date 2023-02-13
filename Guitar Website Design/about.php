<?php 
    include('common.php'); 
?>

<!DOCTYPE html>
<html>
    <head>
        <?php load_header('About'); ?>
    </head>
    <?php include_all(); ?>
    <body id="main">
        <div class="grid_container">
            <!--==================================TITLE========================================-->
            <?php load_title(); ?>
            <!--==================================MENU BAR========================================-->
            <?php load_nav('About'); ?>
            <!--==================================CONTENT SECTION========================================-->
            <div class="content content_about">
                <div id="ui_error_space"></div>
                <div class="content_sub1 text_preset_title">About Us</div>
                <div class="content_sub1 text_preset_base">Welcome, dear customer. This website's sole purpose is to allow YOU to satisfy your guitars needs.</div>
                <div class="content_sub1 text_preset_base">Resulting in a very ironic name "Guitars For You", which we proudly parade in front of the whole world.</div>
                <p class="content_sub1 text_preset_base" id="content_about_paragraph1">
                    This is a guitar selling website where we sell bespoke one of a kind guitars. 
                    The guitars sold here are sold in singles, meaning there is no large ammount of stock.
                    This website is desighned to be modern and minimalistic with its clear, clean, original design and modern colours.
                    Out team is very passionate and is very dedicated to the development of the website. 
                    We are constantly improving our website based on valuble feedback then debugging it, to allow for only the best shopping experience. 
                    <br> <br> 
                    Lead Developer Names: Aleksandrs Lukjanovs, Harmeet Bharj, Dhrumin Patel</p>
            </div>
            <!--==================================SIDE PANNEL========================================-->
            <?php load_right(); ?>
            <!--==================================FOOTER========================================-->
            <?php load_footer(0);?>
        </div>
    </body>
</html>