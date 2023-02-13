
function add_registration_data(){ 
    //Create a connection pool with the user details
    const mysql = require('mysql'); 
    
    const connectionPool = mysql.createPool({
        connectionLimit: 1, 
        host: "localhost",
        user: "root",
        password: "",
        database: "tea_party",
        debug: false
    });

    // Object to contain all data.
    let registration_data =  "INSERT INTO users (eMail, Password, Age, Username, Name, Last_Name, Mod_Stat, Avatar_ID, Account_Age, Alignment, Contribution, Terminus) " +
    "       VALUES ('"+ document.getElementById('registration_email').value +"', '"+ document.getElementById('registration_input_password').value +"', 99, 'Tester', 'Test', 'Test', '0000001', 9872222, 400, 56, 4, 999999)"
    
    
    //Execute query and output results
    connectionPool.query(registration_data, (err, result) => {
        if (err){//Check for errors
            console.error("Error executing query: " + JSON.stringify(err));
        }
        else{
            console.log(JSON.stringify(result));
        }
    });

}

