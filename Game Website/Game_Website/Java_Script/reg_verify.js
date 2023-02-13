// Declaring variables or mostly test variables.
let email_dup = "";
let error_div = false;
let data_validity = false;
let name_err_acumulator = 0;
let error_couter = 0;
let cn = false;
let ce = false;
let ad = false;
let cp = false;
let cpp = false;
let tDD = false;
let tMM = false;
let tYYYY = false;
let cu = false;
let cb = false;
let password = "";
let stylesheet = document.styleSheets[0];
let control = 0;
let error_container = [];
var error_stack = new Map();
error_stack['E1'] = "<br>  - Please make sure that your name or family name is within 1-50 range and is letters only! ";
error_stack['E2'] = "<br>  - Please type a valid email.";
error_stack['E3'] = "<br>  - Please type a valid post code. ";
error_stack['E4'] = "<br>  - Please enter your birth day which must be a number. No need for 0 in front. ";
error_stack['E5'] = "<br>  - Please enter your birth month which must be a number. No need for 0 in front. ";
error_stack['E6'] = "<br>  - Please enter your birth year from 1930 to 2020.";
error_stack['E7'] = "<br>  - Please enter your username from 2 to 30 characters and no spaces.";
error_stack['E8'] = "<br>  - Please enter your password which must contain at least a capital, small letter, number, special character and the password must be between 8 - 20 character and no spaces. ";
error_stack['E9'] = "<br>  - Please make sure your passwords match.";
error_stack['E10'] = "<br>  - You must tick the user agreement box in order to be an authorized user.";
error_stack['E11'] = "<br>  - Email is already taken."
error_stack['E12'] = "<br> - Your username or password are incorrect. Please try again."

//Simple ease of life code to highlight boxes for me.
function AorB (num , id){if(num == 0){document.getElementById(id).style.border = "3px solid red";} else{document.getElementById(id).style.border = "3px solid black";}} // Little shortcut :)

function error_maker(ref, mode){
    let error_x = document.getElementById("ui_error_space");

    if (error_div == false){
        error_x.innerHTML = "<b>Error! Some of the input is invalid. Please check the following: </b> <br>";
        error_x.style.display = "block";
        error_div = true;
    }

    let div = document.createElement("div");
    let rm_element = document.getElementById(ref);
    div.id = ref;
    div.style.width = "100%";
    div.innerHTML = error_stack[ref];
    if (mode == "add"){
        if(ref == 'E1') {if(name_err_acumulator == 0){name_err_acumulator = 1;}else {name_err_acumulator = 2}}
        if(document.getElementById(ref) == null){
            error_couter ++;
            error_x.appendChild(div);
            error_x.style.display = "block";
        }
    }else if(mode == "rm"){
        if(ref != 'E1') {
            if(document.getElementById(ref) != null){
                error_couter --;
                rm_element.parentNode.removeChild(rm_element);
            }
        }else{
            if(name_err_acumulator == 2){name_err_acumulator = 1
            }else if (name_err_acumulator == 1){
                name_err_acumulator = 0;
                if(document.getElementById(ref) != null){
                    error_couter --;
                    rm_element.parentNode.removeChild(rm_element);
                }
            }
        }

        if(error_couter < 1){error_x.style.display = "none";}
    }
}

//This verifies all is correct before unlocking the button.
function unlock(){
    if (cn == true && 
        ce == true &&
        ad == true &&
        cp == true &&
        cpp == true &&
        tDD == true &&
        tMM == true &&
        tYYYY == true &&
        cu == true &&
        cb == true ) 
        {
            data_validity = true;
            document.getElementById("ui_reg_A").disabled = false;
            document.getElementById("ui_reg_A").style.backgroundColor = "orange";
            if (control == 1){stylesheet.deleteRule(50);}
            stylesheet.insertRule(".ui_low_button:hover{ background-color: rgb(255, 255, 255) !important; }", 50); // Gotta keep that button animated.
            control = 1;
        }
        else {
            data_validity = false;
            document.getElementById("ui_reg_A").disabled = true;
            document.getElementById("ui_reg_A").style.backgroundColor = "rgb(90,90,90)";
            if (control == 1){stylesheet.deleteRule(50);}
            stylesheet.insertRule(".ui_low_button:hover{ background-color: rgb(255,255,255) !important; }", 50);
            control = 1;
        }
}

function check_password(DataID){ // Checks password validity.
    password = document.getElementById(DataID).value;
    if (password.match(/[A-Z]/)  //Makes sure the password meets the conditions.
    && password.match(/[a-z]/) 
    && password.match(/[0-9]/) 
    && password.match(/[^a-zA-Z0-9 ]/) 
    && password.match(/^(.){8,20}$/) ) {AorB(1, DataID); cp = true; error_maker('E8', "rm"); unlock();}  //It meets the conditions. Probably a good password.
    else{AorB(0, DataID); cp = false; error_maker('E8', "add"); unlock();} //Does not meet conditions. Probably a bad password.
}

function check_c_password(DataID){ //Make sure the password's match.
    let c_password = document.getElementById(DataID).value;
    if(c_password != password){ // Check my text box value to match.
        error_maker('E9', "add");
        AorB(0, DataID); // If the value does NOT match.
        cpp = false;
        unlock();
    }else{
        error_maker('E9', "rm");
        AorB(1, DataID); // If the value does match.
        cpp = true;
        unlock();
    }
}

function check_names(DataID){// Define function with input.
    let name = document.getElementById(DataID).value; // Get my value of the text box for matching.
    if(!(name.match(/^[a-zA-Z]{1,50}$/))){ // Check my text box value to match.
        error_maker('E1', "add");
        AorB(0, DataID); // If the value does NOT match.
        cn = false;
        unlock();
    }else{
        error_maker('E1', "rm");
        AorB(1, DataID); // If the value does match.
        cn = true;
        unlock();
    }
}

// Structure below is identical to my check_names function.

function check_email(DataID){
    let email = document.getElementById(DataID).value;
    if(!(email.match(/^(www.){0,1}[a-zA-Z0-9]{1,50}[@]{1}[a-zA-Z0-9]{1,25}([.]{1}[a-z]{1,6}){1,3}$/))){
        email_dup = "";
        error_maker('E2', "add");
        AorB(0, DataID);
        ce = false;
        unlock();
    }else if(localStorage.getItem(email) != null){
        email_dup = "";
        error_maker('E11', "add");
        AorB(0, DataID);
        ce = false;
        unlock();
    }else{
        email_dup = email;
        error_maker('E2', "rm");
        error_maker('E11', "rm");
        AorB(1, DataID);
        ce = true;
        unlock();
    }
}

function check_postal_code(DataID){
    let adress = document.getElementById(DataID).value;
    if(!(adress.match(/^(([A-z]|[A-z][A-z])[0-9]([A-z]|[0-9]){0,1}[ ]{0,1}[0-9]([A-z][A-z]|[A-z]))/))){
        error_maker('E3', "add");
        AorB(0, DataID);
        ad = false;
        unlock();
    }else{
        error_maker('E3', "rm");
        AorB(1, DataID);
        ad = true;
        unlock();
    }
}

function check_day(DataID){
    let dateDD = document.getElementById(DataID).value;
    if(!(dateDD.match(/^([1-9]|[1-3][0-9])$/))){
        error_maker('E4', "add");
        AorB(0, DataID);
        tDD = false;
        unlock();
    }else{
        error_maker('E4', "rm");
        AorB(1, DataID);
        tDD = true;
        unlock();
    }
}

function check_month(DataID){
    let dateMM = document.getElementById(DataID).value;
    if(!(dateMM.match(/^([1-9]|[1][0-2])$/))){
        error_maker('E5', "add");
        AorB(0, DataID);
        tMM = false;
        unlock();
    }else{
        error_maker('E5', "rm");
        AorB(1, DataID);
        tMM = true;
        unlock();
    }
}

function check_year(DataID){
    let dateYYYY = document.getElementById(DataID).value;
    if(!(dateYYYY.match(/^(19[3-9][0-9]|20[0-1][0-9]|2020)$/))){
        error_maker('E6', "add");
        AorB(0, DataID);
        tYYYY = false;
        unlock();
    }else{
        error_maker('E6', "rm");
        AorB(1, DataID);
        tYYYY = true;
        unlock();
    }
}

function check_username(DataID){
    let username = document.getElementById(DataID).value;
    if(!(username.match(/^[^ ]{2,30}$/))){
        error_maker('E7', "add");
        AorB(0, DataID);
        cu = false;
        unlock();
    }else{
        error_maker('E7', "rm");
        AorB(1, DataID);
        cu = true;
        unlock();
    }
}

// Makes sure the checkbox does something.
function check_box(){
    if(cb == false){
        error_maker('E10', "rm");
        cb = true;
        unlock();
    }else{
        error_maker('E10', "add");
        cb = false;
        unlock();
    }
}

// Clean up function simply resets all variables.
function clear_reg_cache(){
    data_validity = false;
    cn = false;
    ce = false;
    ad = false;
    cp = false;
    cpp = false;
    tDD = false;
    tMM = false;
    tYYYY = false;
    cu = false;
    cb = false;
    password = "";
    stylesheet = document.styleSheets[0];
    control = 0;
    error_container = [];
    error_couter = 0;
    name_err_acumulator = 0;
    error_div = false;
    email_dup = "";
}
