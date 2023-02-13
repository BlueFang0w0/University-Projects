var my_sessionStorage = {};

function update_session(){
    my_sessionStorage = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)));
}

function on_load_func(page) {
    console.log("On_load is working.");

    update_session();

    // Will execute even if user is not logged in.
    switch(page){
        case "Home": 
            console.log("Home");
        break;

        case "About":
            console.log("About");
        break;
        
        case "Game":
            console.log("Game");
        break;

        case "Scores":
            console.log("Score");
            load_data();
        break;
    }

    // User must be logged in.
    if(sessionStorage.getItem(sessionStorage.key(0)) != null){

        update_session();

        switch(page){
            case "Home": 
            revealLog_button_transformer(); 
            break;
    
            case "About":

            break;
            
            case "Game":
                
            break;
    
            case "Scores":
                console.log("xd")
                my_user_score();
            break;
        }
    }

}