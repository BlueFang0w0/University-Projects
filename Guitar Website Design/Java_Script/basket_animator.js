let Count_Tracket = 0;
function item_select(Description){ //When you click on a button it must stay highlighted and you must know exactly what has been clicked so it can be removed from the basket.
    document.getElementById("special_ui_basket_data").innerHTML += '<button type="button" class="text_preset_base basket_item_button_preset" onclick="">'+ Description +'</button>'; 
}

function array_re_allocation(){ //Cycle through each item in the array and move everything up to fill empty spaces.
    for(let i = 0 ; i < 50 ; i++){

    }
}