<?php 
    include('common.php'); 
    //include('test.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <?php load_header('Register'); ?>
    </head>
    <?php include_all(); ?>
    <body id="main">
        <div class="grid_container">
            <!--==================================TITLE========================================-->
            <?php load_title(); ?>
            <!--==================================MENU BAR========================================-->
            <?php load_nav('Register'); ?>
            <!--==================================CONTENT SECTION========================================-->
            <div class="content" onload="reg_lock(false);">
                <div class="registration_separator text_preset_title ">Registration Details >>></div>
                <hr>
                <div id="ui_error_space"></div>
                <div class="content_registration_tag">First Name</div>
                <input placeholder="First name" class="content_registration_input user_input_N_P_preset text_preset" title="First name with capital first letter. E.g: Josh, Jack, Cindy, Carol." id="registration_first_name" type="text" autocomplete="given-name" onchange="check_names('registration_first_name')">
                <div class="content_registration_tag">Last Name</div>
                <input placeholder="Last name" class="content_registration_input user_input_N_P_preset text_preset" title="Family name with capital first letter. E.g: Jeremaya , Sickamore." placeholder="Last Name" id="registration_last_name" type="text" autocomplete="family-name" onchange="check_names('registration_last_name')">
                <div class="content_registration_tag">Email</div>
                <input placeholder="Email" class="content_registration_input user_input_N_P_preset text_preset" title="Email in format (part1)@part2.part3. E.g: www.example@mail.co.uk , example@gmail.com ." id="registration_email" type="email" autocomplete="login" onchange="check_email('registration_email')">
                <div class="content_registration_tag">Password</div>
                <input placeholder="Password" class="content_registration_input user_input_N_P_preset text_preset" title="Password must contain at least one of each: Capital letter, Small letter, Number, Special symbol. Password must be no less than 8 characters and it must not be longer than 20 characters." id="registration_input_password" type="password" autocomplete="password" onchange="check_password('registration_input_password')">
                <div class="content_registration_tag">Re-Password</div>
                <input placeholder="Re-Password" class="content_registration_input user_input_N_P_preset text_preset" title="Please repeat the password you have entered above EXACTLY as you have entered it before." id="registration_confirm_password" type="password" autocomplete="password" onchange="check_c_password('registration_confirm_password')">
                <div class="content_registration_tag">Select Country</div>
                <select id="content_registration_country" class="content_registration_input user_input_N_P_preset content_registration_select" name="country" onchange="check_country('content_registration_country')">
                    <option value="non" selected="selected">Choose country.</option>
                    <option value="Afganistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bonaire">Bonaire</option>
                    <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Canary Islands">Canary Islands</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Channel Islands">Channel Islands</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Island">Cocos Island</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote DIvoire">Cote DIvoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curaco">Curacao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">Falkland Islands</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Ter">French Southern Ter</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Great Britain">Great Britain</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="India">India</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea North">Korea North</option>
                    <option value="Korea Sout">Korea South</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia">Macedonia</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Midway Islands">Midway Islands</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Nambia">Nambia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherland Antilles">Netherland Antilles</option>
                    <option value="Netherlands">Netherlands (Holland, Europe)</option>
                    <option value="Nevis">Nevis</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau Island">Palau Island</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Phillipines">Philippines</option>
                    <option value="Pitcairn Island">Pitcairn Island</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Republic of Montenegro">Republic of Montenegro</option>
                    <option value="Republic of Serbia">Republic of Serbia</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="St Barthelemy">St Barthelemy</option>
                    <option value="St Eustatius">St Eustatius</option>
                    <option value="St Helena">St Helena</option>
                    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                    <option value="St Lucia">St Lucia</option>
                    <option value="St Maarten">St Maarten</option>
                    <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                    <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                    <option value="Saipan">Saipan</option>
                    <option value="Samoa">Samoa</option>
                    <option value="Samoa American">Samoa American</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Tahiti">Tahiti</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Erimates">United Arab Emirates</option>
                    <option value="United States of America">United States of America</option>
                    <option value="Uraguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City State">Vatican City State</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                    <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                    <option value="Wake Island">Wake Island</option>
                    <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zaire">Zaire</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                </select>
                <div class="content_registration_tag">Door Number</div>
                <input placeholder="Door number" class="content_registration_input user_input_N_P_preset text_preset" title="Please enter your door number. E.g: 156, 28 , 35 , 1" id="registration_door_number" maxlength="7" onchange="check_door('registration_door_number')">
                <div class="content_registration_tag">Post Code</div>
                <input placeholder="Post code" class="content_registration_input user_input_N_P_preset text_preset" title="Please enter your postal code. E.g: NX10 5M" id="registration_adress" type="text" autocomplete="postal-code" onchange="check_postal_code('registration_adress')">
                <div class="content_registration_tag">Date of Birth</div>
                <div id="content_registration_bday" style="display:table;">
                    <input class= "content_registration_input user_input_N_P_preset text_preset" id="registration_date_birth_input_DD" title="Day of your birth." placeholder="DD" type="text" autocomplete="bday-day" inputmode="numeric" maxlength="2" onchange="check_day('registration_date_birth_input_DD')"> 
                    <input class= "content_registration_input user_input_N_P_preset text_preset" id="registration_date_birth_input_MM" title="Month of your birth." placeholder="MM" type="text" autocomplete="bday-month" inputmode="numeric" maxlength="2" onchange="check_month('registration_date_birth_input_MM')">
                    <input class= "content_registration_input user_input_N_P_preset text_preset" id="registration_date_birth_input_YYYY" title="Year of your birth." placeholder="YYYY" type="text" autocomplete="bday-year" inputmode="numeric" maxlength="4" onchange="check_year('registration_date_birth_input_YYYY')">
                </div>
                <br>
                <div class ="card">
                    <div class="registration_separator text_preset_title">Card Details >>></div>
                    <hr>
                    <div class ="content_card_reg_tag">Card Type</div>
                    <select id="content_registration_type" class="content_registration_input user_input_N_P_preset content_registration_select" name="type" placeholder="Card type" onchange="check_type('content_registration_type')">
                        <option value="non" selected="selected">Choose card.</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="Master Card">Master Card</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Visa">Visa</option>
                    </select>
                    <div class ="content_card_reg_tag">Credit Card Number</div>
                    <input placeholder="Credit card number" class="content_registration_input user_input_N_P_preset text_preset" id="content_registration_card_num" type="text" autocomplete="cc-number" inputmode="numeric" minlength="16" maxlength="19" onchange="check_card_num('content_registration_card_num')">
                    <div class ="content_card_reg_tag">Expiration Date</div>
                    <input placeholder="Expiration date" class="content_registration_input user_input_N_P_preset text_preset" id="content_registration_card_exp" type="text" autocomplete="cc-exp" inputmode="numeric" minlength="7" maxlength="7" onchange="check_card_exp('content_registration_card_exp')">
                    <div class ="content_card_reg_tag">Card Holders First Name</div>
                    <input placeholder="Card holder's first name" class="content_registration_input user_input_N_P_preset text_preset" id="content_registration_card_first_name" type="text" autocomplete="cc-given-name" onchange="check_card_names('content_registration_card_first_name')">
                    <div class ="content_card_reg_tag">Card Holder Last Name</div>
                    <input placeholder="Card holder's last name" class="content_registration_input user_input_N_P_preset text_preset" id="content_registration_card_last_name" type="text" autocomplete="cc-family-name" onchange="check_card_names('content_registration_card_last_name')">
                    <div class ="content_card_reg_tag">Optinal: Billing Adress</div> 
                    <input placeholder="Billing address" class="content_registration_input user_input_N_P_preset text_preset" id="content_registration_bill">
                    <br>
                    <br>
                    <div id="content_registration_checkbox">
                        <label>
                            <input id="user_input_checkbox_test" type="checkbox" onchange=check_box()> 
                            <span class="text_preset content_card_reg_tag" for="user_input_checkbox_test"> By ticking the box on the left you verify that all the data provided is valid. Also you consesnt to us keeping your data safely for use where nescessary. Finally you also agree with our private policy and you understand your rights.</span> 
                        </label>
                    </div>
                    <div>
                        <button type="button" class="button_preset text_preset_base ui_low_button" id="content_submit_reg" onclick="submit_data()">Submit</button>
                        <div id="reg_confirm" class="content_registration_tag">Thank for registering.</div>
                    </div>
                </div>
            </div>
            <!--==================================SIDE PANNEL========================================-->
            <?php load_right(); ?>
            <!--==================================FOOTER========================================-->
            <?php load_footer(0);?>
        </div>
    </body>
</html>