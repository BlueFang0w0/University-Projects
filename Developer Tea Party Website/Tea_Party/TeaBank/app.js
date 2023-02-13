const { response } = require('express');
const express = require('express'); //Define express.
const port = 8080;
const app = express(); //Calls express which gives us an object.
let testData =  [];

function getAllUsers(request , response){
    response.send("Server running confirmation!");
    //response.send(JSON.stringify(testData));
}

function addUser(request , response){
   let newUser = request.body;
   console.log(newUser);
   testData.push(JSON.stringify(newUser));
   response.send("Data received!");
}

app.use(express.static('public'));

app.get("/users", getAllUsers);
app.post("/users", addUser);

app.listen(port, function(error){
    if(error){
        console.log('There was a problem!: ' + error)
    } else {
        console.log('Server is now running on port: ' + port)
    }
});


