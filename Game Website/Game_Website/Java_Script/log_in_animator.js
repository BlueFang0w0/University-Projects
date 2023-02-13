
// Define some variables.
let reg_data;
var LogClickSwitch = 0;
let Line1 = '<div style="padding: 0; height: 10%;">' + '<input class= "user_input_N_P_preset" placeholder="Email" id="email" type="email" autocomplete="login">' + '</div>'; // These are how I get the cool pop in effect.
let Line2 = '<div style="padding: 0; height: 10%;">' + '<input class= "user_input_N_P_preset" placeholder="Password" id="password" type="password" autocomplete="password">' + '</div>';
let Line3 = '<button type="button" id="ui_log_A" class="ui_low_button" onclick="revealLog()"  style="left: 40%; top: 40%;"> Log In</button>';
let Line4 = '<p id="OR_reg_page_text" style="position:relative; top:45%; left: 45%; font-size: 30px; font-family: Arial, Helvetica, sans-serif; "><b>OR</b></p>';
let Line5 = '<button type="button" id="ui_reg_A" class="ui_low_button" onclick="revealReg()" style="left: 36%; top: 50%;">Register Now</button></div>';

document.addEventListener('DOMContentLoaded', ()=>{console.log("Page is loaded! ")}); // Let content load. Good practice.

function revealLog_button_transformer() { // Essentially is welcoming sequence which also turns my log in button into a log out button.
    update_session();
    LogClickSwitch = 2; //Have a bunch of similar statments to keep track of whats on and off so things don't interfere.
    RegClickSwitch = 0;
    document.getElementById("ui_login_group").innerHTML = '<h1 class=text_preset style="text-align: center;"> Welcome ' + my_sessionStorage.Username +'! </h1>'; // Welcome.
    document.getElementById("ui_register_group").innerHTML = ''; // Clean.
    document.getElementById("ui_rol_interface").innerHTML = '<button type="button" id="ui_log_A" class="ui_low_button" onclick="revealLog()"  style="left: 40%; top: 40%;"> Log Out</button>'; //Transform my button.
}

function retreive_registration_data(){ //This is how my log in works.
    if (localStorage.getItem(document.getElementById("email").value) == null){ //First I need an email to get data from. I need a valid one. Which is what I check here.
        AorB(0, "email"); // In case you are wondering, this type of function is a little shortcut from a different java to highlight boxes. You will see it offten.
        AorB(0, "password"); 
        error_maker('E12', "add"); //Similarly to what is mentioned above but this makes full on error messages and stacks them.
    }else{
        reg_data = JSON.parse(localStorage.getItem(document.getElementById("email").value)); //If all is good I pull the data for verification.
        if (reg_data.Password != document.getElementById("password").value){//Straightforward password check using reg_data.
            AorB(0, "email"); 
            AorB(0, "password"); 
            error_maker('E12', "add");
        }else{
            log_lock = false;
            AorB(1, "email");
            AorB(1, "password");
            error_maker('E12', "rm");
            sessionStorage.setItem(reg_data.Email, JSON.stringify(reg_data));
            revealLog_button_transformer();
        }
    }
}


function revealLog() { //This is my button switcher. It simply activates different thigns every time you click my button. ;)
    switch(LogClickSwitch){
        case 0:
            clear_reg_cache();
            RegClickSwitch = false;
            document.getElementById("ui_reg_A").disabled = false;
            document.getElementById("ui_reg_A").style.backgroundColor = "orange";
            stylesheet.insertRule(".ui_low_button:hover{ background-color: rgb(255, 255, 255) !important; }", 50);
            document.getElementById("ui_login_group").innerHTML = Line1 + Line2;
            document.getElementById("ui_register_group").innerHTML = '';
            LogClickSwitch = 1;
        break;

        case 1:
            retreive_registration_data();
        break;

        case 2:
            sessionStorage.clear();
            document.getElementById("ui_login_group").innerHTML = '';
            document.getElementById("ui_rol_interface").innerHTML = Line3 + Line4 + Line5;
            LogClickSwitch = 0;
            location.reload();
        break;
    }
}


