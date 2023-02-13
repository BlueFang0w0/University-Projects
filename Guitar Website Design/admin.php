<?php 
    include('common.php'); 
    //include('test.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <?php load_header('Admin'); ?>
    </head>
    
    <?php include_all(); ?>

    <body id="main">
        <div class="grid_container">
            <!--==================================TITLE========================================-->
            <?php load_title(); ?>
            <!--==================================MENU BAR========================================-->
            <?php load_nav('Admin'); ?>
            <!--==================================CONTENT SECTION========================================-->
            <div class="content" id="admin_menu_container">
                <div>
                    <h1 class="content_sub1 text_preset_title" id="admin_menu_title" title="For authorized personell only!">ADMINISTRATOR MENU</h1>
                </div>
                <div id="admin_menu_sub_container">
                    <div id="admin_content_control_space">
                        <button type="button" class="button_preset text_preset_base admin_option_preset admin_menuOpt" onclick="reveal_options(1)">Manage Stock</button>
                        <button type="button" class="button_preset text_preset_base admin_option_preset admin_menuOpt" onclick="reveal_options(2)">Manage Orders</button>
                        <button type="button" class="button_preset text_preset_base admin_option_preset admin_menuOpt" onclick="reveal_options(3)">Manage Customers</button>
                        <button type="button" class="button_preset text_preset_base admin_option_preset admin_menuOpt" onclick="reveal_options(4)">Manage Staff</button>
                        <hr>
                        <div id="admin_extra_options"></div>
                        <hr>
                        <div id="admin_extra_options_dif"></div>
                    </div>
                    <div id="admin_content_data_space"></div>
                </div>
                
            </div>
            <!--==================================SIDE PANNEL========================================-->
            <?php load_right(); ?>
            <!--==================================FOOTER========================================-->
            <?php load_footer(1);?>
        </div>
    </body>
</html>