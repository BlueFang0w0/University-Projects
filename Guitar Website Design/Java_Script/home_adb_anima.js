let Count = 0;
let Max_Count = 5;
let Min_Count = 0;
var Bill_Board_On = false;

function apply_image(i , x , y){
    if(Bill_Board_On == true){
        document.getElementById("ad_board_image").src = "Assets/board/" + i;
        document.getElementById("ad_board_space").style.backgroundColor = x;
        document.getElementById("ad_board_space").style.borderColor = y;
    }
}

function select_image(i){
    if(Bill_Board_On == true){
        if(i == "add"){
            if(Count < Max_Count){
                Count ++;
            }else{Count = Min_Count;}
        }

        else if(i == "sub"){
            if(Count > Min_Count){
                Count --;
            }else{Count = Max_Count;}
        }
    
        switch(Count){
            case 0:
                apply_image("slide1.jpg" , "black" , "white");
            break;
            
            case 1:
                apply_image("slide2.jpg" , "black" , "white");
            break;
    
            case 2:
                apply_image("slide3.jpg" , "black" , "white");
            break;
    
            case 3:
                apply_image("slide4.jpg" , "white" , "black");
            break;
    
            case 4:
                apply_image("slide5.png" , "white" , "black");
            break;
    
            case 5:
                apply_image("slide6.png" , "white" , "black");
            break;
    
        }
    }
}

function button_select_image(i){
    auto_run_que_Counter1 = 0;
    select_image(i);
}