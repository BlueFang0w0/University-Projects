
function reg_lock(x){
    if(x){
        document.getElementById("content_submit_reg").disabled = false;
        document.getElementById("content_submit_reg").style.backgroundColor = "rgb(0, 35, 100)";
        
    }else{
        document.getElementById("content_submit_reg").disabled = true;
        document.getElementById("content_submit_reg").style.backgroundColor = "gray";
    }
}

// Declaring variables or mostly test variables. 
let email_dup = "";
let error_div = false;
let data_validity = false;
let name_err_acumulator = 0;
let card_name_err_acumulator = 0;
let error_couter = 0;
let cn = false; //Check names
let ccn = false //Check credit names
let ce = false; //Check email
let cd = false; //Check door
let cc = false; //Check country
let ad = false; //Check post code
let cp = false; //Check password
let cpp = false; //Check verify password
let tDD = false; //Check day of birth
let tMM = false; //Check month of birth
let tYYYY = false; //Check year of birth
let ct = false; //Check type
let ccnu = false; //Check card number
let cce = false; //Check card expiry
let cb = false; //Check box
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
error_stack['E13'] = "<br> - Please select the country."
error_stack['E14'] = "<br> - Please provide a valid door number."
error_stack['E15'] = "<br> - Please select the card type."
error_stack['E16'] = "<br> - Please provide a valid card number that is numbers only and is in between 16 to 19 characters."
error_stack['E17'] = "<br> - Please provide a valid card exiry date. It must be numbers only in format MMYYYY without any separators and is 6 characters long."
error_stack['E18'] = "<br> - Please make sure that your cardholder's name or family name is within 1-50 range and is letters only!"

//Simple ease of life code to highlight boxes for me.
function AorB (num , id){if(num == 0){document.getElementById(id).style.border = "3px solid red";} else{document.getElementById(id).style.border = "3px solid black";}} // Little shortcut :)

//Creates errors for you.
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
        if(ref == 'E1') {if(name_err_acumulator == 0){name_err_acumulator = 1;}else {name_err_acumulator = 2}} //Part of my handler to avoid problems with similar errors.
        if(ref == 'E18') {if(card_name_err_acumulator == 0){card_name_err_acumulator = 1;}else {card_name_err_acumulator = 2}} //Part of my handler to avoid problems with similar errors.
        if(document.getElementById(ref) == null){
            error_couter ++;
            error_x.appendChild(div);
            error_x.style.display = "block";
        }
    }else if(mode == "rm"){
        
        if(ref != 'E1' && ref != 'E18') { //Part of my handler to avoid problems with similar errors.
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
            if(card_name_err_acumulator == 2){card_name_err_acumulator = 1
            }else if (card_name_err_acumulator == 1){
                card_name_err_acumulator = 0;
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
        ccn == true && 
        ce == true &&
        cd == true &&
        cc == true &&
        ad == true &&
        cp == true &&
        cpp == true &&
        tDD == true &&
        tMM == true &&
        tYYYY == true &&
        ct == true &&
        ccnu == true &&
        cce == true &&
        cb == true ) 
        {
            data_validity = true;
            reg_lock(true);
            control = 1;
        }
        else {
            data_validity = false;
            reg_lock(false);
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

function check_card_names(DataID){// Define function with input.
    let name = document.getElementById(DataID).value; // Get my value of the text box for matching.
    if(!(name.match(/^[a-zA-Z]{1,50}$/))){ // Check my text box value to match.
        error_maker('E18', "add");
        AorB(0, DataID); // If the value does NOT match.
        ccn = false;
        unlock();
    }else{
        error_maker('E18', "rm");
        AorB(1, DataID); // If the value does match.
        ccn = true;
        unlock();
    }
}

// Structure below is identical to my check_names function.

function check_email(DataID){
    let email = document.getElementById(DataID).value;
    const request = new XMLHttpRequest(); //Ajax set up.
    const formData = new FormData();
    
    formData.append("collection" , "Users"); //Keys and their contents.
    formData.append("category" , "email");
    formData.append("what" , email);
    
    request.open("POST" , "special_php.php" , true); //Call to php file.
    
    request.onload = function(){
        let response = this.responseText; //Output.
        console.log(response);
        if(!(email.match(/^(www.){0,1}[a-zA-Z0-9]{1,50}[@]{1}[a-zA-Z0-9]{1,25}([.]{1}[a-z]{1,6}){1,3}$/))){
            email_dup = "";
            error_maker('E2', "add");
            AorB(0, DataID);
            ce = false;
            unlock();
        }else if(response != "false"){ //Check if response is NOT false.
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
    request.send(formData);
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

function check_country(DataID){
    let country = document.getElementById(DataID).value;
    if(country == "non"){
        error_maker('E13', "add");
        AorB(0, DataID);
        cc = false;
        unlock();
    }else{
        error_maker('E13', "rm");
        AorB(1, DataID);
        cc = true;
        unlock();
    }
}

function check_type(DataID){
    let card_type = document.getElementById(DataID).value;
    if(card_type == "non"){
        error_maker('E15', "add");
        AorB(0, DataID);
        ct = false;
        unlock();
    }else{
        error_maker('E15', "rm");
        AorB(1, DataID);
        ct = true;
        unlock();
    }
}

function check_door(DataID){
    let door = document.getElementById(DataID).value;
    if(!(door.match(/^[0-9]{1,6}[A-z]{0,1}$/))){
        error_maker('E14', "add");
        AorB(0, DataID);
        cd = false;
        unlock();
    }else{
        error_maker('E14', "rm");
        AorB(1, DataID);
        cd = true;
        unlock();
    }
}

function check_card_num(DataID){
    let card_num = document.getElementById(DataID).value;
    if(!(card_num.match(/^[0-9]{16,19}$/))){
        error_maker('E16', "add");
        AorB(0, DataID);
        ccnu = false;
        unlock();
    }else{
        error_maker('E16', "rm");
        AorB(1, DataID);
        ccnu = true;
        unlock();
    }
}

function check_card_exp(DataID){
    let card_exp = document.getElementById(DataID).value;
    if(!(card_exp.match(/^([0-1][1-2][0-9][0-9]|[0][1-9][0-9][0-9]|[1][0][0-9][0-9])$/))){
        error_maker('E17', "add");
        AorB(0, DataID);
        cce = false;
        unlock();
    }else{
        error_maker('E17', "rm");
        AorB(1, DataID);
        cce = true;
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
    let cn = false; //Check names
    ccn = false //Check credit names
    ce = false; //Check email
    cd = false; //Check door
    cc = false; //Check country
    ad = false; //Check post code
    cp = false; //Check password
    cpp = false; //Check verify password
    tDD = false; //Check day of birth
    tMM = false; //Check month of birth
    tYYYY = false; //Check year of birth
    ct = false; //Check type
    ccnu = false; //Check card number
    cce = false; //Check card expiry
    cb = false; //Check box
    password = "";
    stylesheet = document.styleSheets[0];
    control = 0;
    error_container = [];
    error_couter = 0;
    name_err_acumulator = 0;
    error_div = false;
    email_dup = "";
}

function add_registration_data(){ // Defining my event function that will be called using the event.
     
    let registration_data = { // Object to contain all data.
        first_name: document.getElementById('registration_first_name').value,
        last_name: document.getElementById('registration_last_name').value,
        country: document.getElementById('content_registration_country').value,
        email: document.getElementById('registration_email').value,
        post: document.getElementById('registration_adress').value,
        password: document.getElementById('registration_input_password').value,
        dd: document.getElementById('registration_date_birth_input_DD').value,
        mm: document.getElementById('registration_date_birth_input_MM').value,
        yyyy: document.getElementById('registration_date_birth_input_YYYY').value,
        door: document.getElementById('registration_door_number').value,
        credit_type: document.getElementById('content_registration_type').value,
        card_number: document.getElementById('content_registration_card_num').value,
        card_expiry: document.getElementById('content_registration_card_exp').value,
        card_first_Name: document.getElementById('content_registration_card_first_name').value,
        card_last_name: document.getElementById('content_registration_card_last_name').value,
        admin: 0
    }

    const request = new XMLHttpRequest(); //Ajax set up.
    const formData = new FormData();
    
    formData.append("collection" , "Users"); //Keys and their contents.
    formData.append("registration_data" , JSON.stringify(registration_data));
    
    request.open("POST" , "special_php.php" , true); 
    
    request.onload = function(){
        let response = this.responseText; 
        console.log(response);
    }

    request.send(formData);
}


function submit_data(){
    document.getElementById("reg_confirm").style.display = "relative";
    add_registration_data();
}
