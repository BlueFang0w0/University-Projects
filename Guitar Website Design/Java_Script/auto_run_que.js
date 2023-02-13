var Time = new Date(); //Lets get some live time.
var auto_run_que_Counter1 = 0;
let L_Time = [Time.getSeconds() , Time.getMinutes() , Time.getHours()];
let Counter2 = 0;
let Time_To_Reset = 300;

function connection_status(){let x = window.navigator.onLine; return x;}

function update_clock(){
    let display_hours;
    let display_minutes;
    let display_seconds;

    if (L_Time[2] < 10){
        display_hours = "0" + L_Time[2].toString();
    }else{display_hours = L_Time[2].toString();}

    if (L_Time[1] < 10){
        display_minutes = "0" + L_Time[1].toString();
    }else{display_minutes = L_Time[1].toString();}

    if (L_Time[0] < 10){
        display_seconds = "0" + L_Time[0].toString();
    }else{display_seconds = L_Time[0].toString();}

    document.getElementById("clock").innerHTML = "Current Time: " + display_hours + ":" + display_minutes + ":" + display_seconds;

}

function clock(mode){
    if(mode == "add"){
        if(L_Time[0] + 1 < 60){ //Allows me to only call on live time once every while by simply counting it self live.
            L_Time[0]++;
        }else{
            L_Time[0] = 0;
            if (L_Time[1] + 1 < 60) {
                L_Time[1] ++;
            }else{
                L_Time[1] = 0;
                if(L_Time[2] + 1 < 24){
                    L_Time[2] ++;
                }else{
                    L_Time[2] = 0;
                }
            }
        }
    }
    update_clock();
}

window.onload = setInterval(function(){
    clock("add");

    let elementExists = document.getElementById("ad_board_space"); //Checks that the element exists, if not then = null.

    if(elementExists != null){Bill_Board_On = true;} //Enables billboard only if it's element exists, else = false.
    else{Bill_Board_On = false;};

    if(auto_run_que_Counter1 == 10){select_image("add"); auto_run_que_Counter1 = 0;}; //Changes image when counter reaches 10 automatically.

    if(document.getElementById("content_registration_checkbox") != null){
        Time_To_Reset = 1800;
    }else{Time_To_Reset = 300;};
    
    if(Counter2 == Time_To_Reset){ //Reloads the page every 5 minutes to syncronize time. This is me trying to account for the system count inaccuracy.
        if(!(connection_status())){ 
            alert('ERROR: Website is not connected to the internet! Clock will operate in auto untill connection is established.'); 
        }else{location.reload();}
        Counter2 = 0; 
        console.log("OP!");
    } 

    //Add to counters below.
    auto_run_que_Counter1++; 
    Counter2 ++;
}, 1000)