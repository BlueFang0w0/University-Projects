// These are variable definitions + this is how I achive my effect. I literally paste code when I need it.
var RegClickSwitch = false;
var Running = false;
let LineA1 = '<div style="padding: 0; height: 10%;"> <input class= "user_input_N_P_preset" title="First name with capital first letter. E.g: Josh, Jack, Cindy, Carol." placeholder="First Name" id="first_name" type="text" autocomplete="given-name" onchange=check_names("first_name")> </div>';
let LineA2 = '<div style="padding: 0; height: 10%;"> <input class= "user_input_N_P_preset" title="Family name with capital first letter. E.g: Jeremaya , Sickamore." placeholder="Last Name" id="last_name" type="text" autocomplete="family-name" onchange=check_names("last_name")> </div>';
let LineA3 = '<div style="padding: 0; height: 10%;"> <input class= "user_input_N_P_preset" title="Email in format (part1)@part2.part3. E.g: www.example@mail.co.uk , example@gmail.com ." placeholder="Email" id="email" type="email" autocomplete="login" onchange=check_email("email")> </div>';
let LineA4 = '<div style="padding: 0; height: 10%;"> <input class= "user_input_N_P_preset" title="Please enter your postal code. E.g: NX10 5M" placeholder="Post Code" id="adress" type="text" autocomplete="postal-code" onchange=check_postal_code("adress")> </div>';
let LineA5 = '<div style="padding: 0; height: 10%;"> <input class= "user_input_N_P_preset" title="Password must contain at least one of each: Capital letter, Small letter, Number, Special symbol. Password must be no less than 8 characters and it must not be longer than 20 characters." placeholder="Password" id="input_password" type="password" autocomplete="password" onchange=check_password("input_password")> </div>';
let LineA6 = '<div style="padding: 0; height: 10%;"> <input class= "user_input_N_P_preset" title="Please repeat the password you have entered above EXACTLY as you have entered it before." placeholder="Repeat Password" id="confirm_password" type="password" autocomplete="password" onchange=check_c_password("confirm_password")> </div>';
let LineA7 = '<div class="text_preset" id="date_birth_text"><b>Date of Birth</div>'
let LineA8 = ' <div style="display:table;">';
let LineA9 = '<input class= "date_birth_input" id="date_birth_input_DD" title="Day of your birth." placeholder="DD" type="text" autocomplete="bday-day" inputmode="numeric" maxlength="2" style="margin-left:16%;" onchange=check_day("date_birth_input_DD")> ';
let LineA10 = '<input class= "date_birth_input" id="date_birth_input_MM" title="Month of your birth." placeholder="MM" type="text" autocomplete="bday-month" inputmode="numeric" maxlength="2" style="margin-left:1%;" onchange=check_month("date_birth_input_MM")>';
let LineA11 = '<input class= "date_birth_input" id="date_birth_input_YYYY" title="Year of your birth." placeholder="YYYY" type="text" autocomplete="bday-year" inputmode="numeric" maxlength="4" style="margin-left:1%"; onchange=check_year("date_birth_input_YYYY")></div>';
let LineA12 = '<div style="padding: 0; height: 10%;"> <input class= "user_input_N_P_preset" title="Please enter your nick name which others will see. NICK NAMES MUST NOT HAVE SPACES and it must be less than 30 characters." placeholder="Username / Display Name" id="nick_name" type="text" autocomplete="nickname" onchange=check_username("nick_name")> </div>';
let LineA13 = '<label><input id="user_input_checkbox_test" type="checkbox" onchange=check_box()> <span class="text_preset" for="user_input_checkbox_test"> By ticking the box on the left you verify that all the data provided is valid. Also you consesnt to us keeping your data safely for use where nescessary. Finally you also agree with our private policy and you understand your rights.</span> </label>';

document.addEventListener('DOMContentLoaded', ()=>{console.log("Page is loaded! ")}); // Let content load.

function add_registration_data(){ // Defining my event function that will be called using the event.
     
    let registration_data = { // Object to contain all data.
        First_Name: document.getElementById('first_name').value,
        Last_Name: document.getElementById('last_name').value,
        Email: document.getElementById('email').value,
        Adress: document.getElementById('adress').value,
        Password: document.getElementById('input_password').value,
        DD: document.getElementById('date_birth_input_DD').value,
        MM: document.getElementById('date_birth_input_MM').value,
        YYYY: document.getElementById('date_birth_input_YYYY').value,
        Username: document.getElementById('nick_name').value,
        Score: 0
    }
    localStorage.setItem(document.getElementById('email').value, JSON.stringify(registration_data)); //Add to temp storage.
}

function revealReg() { // These are my button switchers. Essentially it switches what my registration button does when you click it.
    if(Running == false){
        if (RegClickSwitch == false){
            error_maker('E12', "rm");
            document.getElementById("ui_register_group").innerHTML = LineA1 + LineA2 + LineA3 + LineA4 + LineA5 + LineA6 + LineA7 + LineA8 + LineA9 + LineA10 + LineA11 + LineA12 + LineA13; // Peacing together that sweeet code.
            document.getElementById("ui_login_group").innerHTML = '';
            document.getElementById("ui_reg_A").disabled = true; // Turning off that button so you can't skip registration.
            document.getElementById("ui_reg_A").style.backgroundColor = "rgb(90,90,90)"; // Extra fx for that button.
            RegClickSwitch = true;
            LogClickSwitch = 0;
        }else{
            clear_reg_cache();
            Running = true;
            LogClickSwitch = 0;
            RegClickSwitch = false;
            add_registration_data(); // On click save data.
            document.getElementById("ui_register_group").innerHTML = '<h1 class=text_preset style="text-align: center;"> Thank you for registration. </h1>'; //Ty :)
            document.getElementById("ui_login_group").innerHTML = '';
                setTimeout(function(){  // You shall not pass... untill time runs out.
                    Running = false;
                    document.getElementById("ui_register_group").innerHTML = '';

                }, 3000);
        }
    }
}




