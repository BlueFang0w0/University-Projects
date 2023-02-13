let previous_ro = 0;
let previous_oc = 0;
let v1 = '<button type="button" class="button_preset text_preset_base admin_option_preset_ex admin_menuExOpt" onclick="option_commander(1)">Remove Products</button>';
let v2 = '<button type="button" class="button_preset text_preset_base admin_option_preset_ex admin_menuExOpt" onclick="option_commander(2)">Add Products</button>';
let v3 = '<button type="button" class="button_preset text_preset_base admin_option_preset_ex admin_menuExOpt" onclick="option_commander(3)">Complete Order</button>';
let v4 = '<button type="button" class="button_preset text_preset_base admin_option_preset_ex admin_menuExOpt" onclick="option_commander(4)">Remove Order</button>';
let v5 = '<button type="button" class="button_preset text_preset_base admin_option_preset_ex admin_menuExOpt" onclick="option_commander(5)">Decline Order</button>';
let v6 = '<button type="button" class="button_preset text_preset_base admin_option_preset_ex admin_menuExOpt" onclick="option_commander(6)">Remove Customer Account</button>';
let v7 = '<button type="button" class="button_preset text_preset_base admin_option_preset_ex admin_menuExOpt" onclick="option_commander(7)">Add Staff Account</button>';
let v8 = '<button type="button" class="button_preset text_preset_base admin_option_preset_ex admin_menuExOpt" onclick="option_commander(8)">Remove Staff Account</button>';
// Sub command vars.
let com1a = '<input class= "user_input_N_P_preset text_preset_base" placeholder="Unique ID" id="admin_menu_id_input" type="id" autocomplete="id" title="Please provide the unique id.">';
let com1b = '<button type="button" id="admin_menu_id_input_rm" class="button_preset text_preset_base" onclick=" ">Remove Product</button>';

let com2a = '<input class= "user_input_N_P_preset text_preset_base admin_preset1" placeholder="Name" id="admin_menu_op1b_name" title="Please provide a unique name.">';
let com2b = '<input class= "user_input_N_P_preset text_preset_base admin_preset1" placeholder="Image Adress" id="admin_menu_op1b_IA" title="Provide the image adress.">';
let com2c = '<input class= "user_input_N_P_preset text_preset_base admin_preset1" placeholder="Price" id="admin_menu_op1b_price" title="How much does the product cost.">';
let com2d = '<input class= "user_input_N_P_preset text_preset_base admin_preset1" placeholder="Tag" id="admin_menu_op1b_tag" title="What category does this product fit into.">';
let com2e = '<textarea class= "user_input_N_P_preset text_preset_base" placeholder="Description" id="admin_menu_op1b_desc" title="In depth about the product. Max 5000 char." maxlength="5000"></textarea>';
let com2f = '<button type="button" id="admin_menu_op1b_addB" class="button_preset text_preset_base" onclick=" ">Add Product</button>';

let com3a = '<input class= "user_input_N_P_preset text_preset_base admin_preset1" placeholder="Unique ID" id="admin_menu_op2a_inp" type="id" autocomplete="id" title="Please provide the unique id.">';
let com3b = '<button type="button" id="admin_menu_op2a_copB" class="button_preset text_preset_base admin_menu_low_button_preset" onclick=" ">Complete Order</button>';

let com4a = '<input class= "user_input_N_P_preset text_preset_base admin_preset1" placeholder="Unique ID" id="admin_menu_op2b_inp" type="id" autocomplete="id" title="Please provide the unique id.">';
let com4b = '<button type="button" id="admin_menu_op2b_copB" class="button_preset text_preset_base admin_menu_low_button_preset" onclick=" ">Remove Order</button>';

let com5a = '<input class= "user_input_N_P_preset text_preset_base admin_preset1" placeholder="Unique ID" id="admin_menu_op2c_inp" type="id" autocomplete="id" title="Please provide the unique id.">';
let com5b = '<button type="button" id="admin_menu_op2c_copB" class="button_preset text_preset_base admin_menu_low_button_preset" onclick=" ">Decline Order</button>';

let com6a = '<input class= "user_input_N_P_preset text_preset_base admin_preset1" placeholder="Unique ID" id="admin_menu_op3a_inp" type="id" autocomplete="id" title="Please provide the unique id.">';
let com6b = '<button type="button" id="admin_menu_op3a_copB" class="button_preset text_preset_base admin_menu_low_button_preset" onclick=" ">Remove Customer Acc</button>';

let com7a = '<input class= "user_input_N_P_preset text_preset_base admin_preset1" placeholder="Unique ID" id="admin_menu_op4a_inp" type="id" autocomplete="id" title="Please provide the unique id.">';
let com7b = '<button type="button" id="admin_menu_op4a_copB" class="button_preset text_preset_base admin_menu_low_button_preset" onclick=" ">Set Admin Acc</button>';

let com8a = '<input class= "user_input_N_P_preset text_preset_base admin_preset1" placeholder="Email" id="admin_menu_op4b_inp" type="email" autocomplete="email" title="Please provide the email of staff.">';
let com8b = '<button type="button" id="admin_menu_op4b_copB" class="button_preset text_preset_base admin_menu_low_button_preset" onclick=" ">Remove Admin Acc</button>';

// Few database example vars.
// Stock.
let stk1a = '<div class="content_sub1 shop_content_sub1">';
let stk1b = '<img src="Assets/product_images/1.png" alt="Bass" style="width:100%">';
let stk1c = '<div class="shop_content_buy_info">';
let stk1d = '<h1 class="text_preset_title">3/4 LA Bass Guitar Blue</h1>';
let stk1e = '<p class="price text_preset_base">£89.99</p>';
let stk1f = '</div>';
let stk1g = '</div>';


let stk2a = '<div class="content_sub1 shop_content_sub1">';
let stk2b = '<img src="Assets/product_images/2.png" alt="Bass" style="width:100%">';
let stk2c = '<div class="shop_content_buy_info">';
let stk2d = '<h1 class="text_preset_title">LA Bass Guitar Sunburst</h1>';
let stk2e = '<p class="price text_preset_base">£99.99</p>';
let stk2f = '</div>';
let stk2g = '</div>';


let stk3a = '<div class="content_sub1 shop_content_sub1">';
let stk3b = '<img src="Assets/product_images/3.png" alt="Acoustic" style="width:100%">';
let stk3c = '<div class="shop_content_buy_info">';
let stk3d = '<h1 class="text_preset_title">Electro Acoustic Bass Guitar</h1>';
let stk3e = '<p class="price text_preset_base">£114.99</p>';
let stk3f = '</div>';
let stk3g = '</div>';

function reveal_options(i){

    if(i == previous_ro){
        switch(i){

            case 1: // Separator ==========
            
            break;
    
            case 2: // Separator ==========
    
            break;
    
            case 3: // Separator ==========
    
            break;
    
            case 4: // Separator ==========
    
            break;
    
        }
        previous_ro = i;
    }else{
        switch(i){
            
            case 1: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = '';
            document.getElementById("admin_extra_options").innerHTML = v1 + v2;
            break;
    
            case 2: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = '';
            document.getElementById("admin_extra_options").innerHTML = v3 + v4 + v5;
            break;
    
            case 3: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = '';
            document.getElementById("admin_extra_options").innerHTML = v6;
            break;
    
            case 4: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = '';
            document.getElementById("admin_extra_options").innerHTML = v7 + v8;
            break;
    
        }
        previous_ro = i;
    }
}

function option_commander(i){
    
    if(i == previous_oc){
        document.getElementById("admin_extra_options_dif").innerHTML = '';
        
        switch(i){

            case 1: // Separator ==========

            break;
    
            case 2: // Separator ==========
    
            break;
    
            case 3: // Separator ==========
    
            break;
    
            case 4: // Separator ==========
    
            break;
    
            case 5: // Separator ==========
    
            break;
    
            case 6: // Separator ==========
    
            break;
    
            case 7: // Separator ==========
    
            break;
    
            case 8: // Separator ==========
    
            break;
        }
        previous_oc = 0;
    }else{
        switch(i){

            case 1: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = com1a + com1b;
            break;
    
            case 2: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = com2a + com2b + com2c + com2d + com2e + com2f;
            break;
    
            case 3: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = com3a + com3b;
            break;
    
            case 4: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = com4a + com4b;
            break;
    
            case 5: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = com5a + com5b;
            break;
    
            case 6: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = com6a + com6b;
            break;
    
            case 7: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = com7a + com7b;
            break;
    
            case 8: // Separator ==========
            document.getElementById("admin_extra_options_dif").innerHTML = com8a + com8b;
            break;
        }
        previous_oc = i;
    }
    
}