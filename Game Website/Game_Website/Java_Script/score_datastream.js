// This is code for my scoreboard.

let score_datafeed = []; // Data container.
let my_rank;

//Declaring my variables:
let sorted_datafeed = [];
let active;

//Applying Data: This is for later use to apply all the data.
function apply_data(data){
    for(var i = 0 ; i < data.length ; i++){ //I stich together all the data and apply crowns to top 3.
        if(my_sessionStorage != null){if(data[i][0] == my_sessionStorage.Username){my_rank = i+1;}};
        if (i == 0){document.getElementById("scores_data_container").innerHTML  += '<div>'+ (i+1) + '<img class="champion_trophies" src="Assets/Golden_Trophy.svg" >' +'</div> <div>' + data[i][0] + '</div> <div>' + data[i][1] + '</div> ';}
        else if (i == 1){document.getElementById("scores_data_container").innerHTML  += '<div>'+ (i+1) + '<img class="champion_trophies" src="Assets/Silver_Trophy.svg" >' +'</div> <div>' + data[i][0] + '</div> <div>' + data[i][1] + '</div> ';}
        else if (i == 2){document.getElementById("scores_data_container").innerHTML  += '<div>'+ (i+1) + '<img class="champion_trophies" src="Assets/Bronze_Trophy.svg" >' +'</div> <div>' + data[i][0] + '</div> <div>' + data[i][1] + '</div> ';}
        else{document.getElementById("scores_data_container").innerHTML  += '<div>'+ (i+1) +'</div> <div>' + data[i][0] + '</div> <div>' + data[i][1] + '</div> ';}
    }
}

//Sorting Data: I need highest score first as that decides the position in scoreboard.
function sort_data(array_input){
    for(var i = 0 ; i < array_input.length ; i++){ // Loop through all my data and keep moving it untill the highest score is first.

        active = false;
        for(var ii = 0 ; ii < sorted_datafeed.length ; ii++){
            if(array_input[i][1] > sorted_datafeed[ii][1]){
                active = true;
                sorted_datafeed.splice(ii, 0, array_input[i])
                break;
            }
        }

        if(!active)
        sorted_datafeed.push(array_input[i]) 

    }
    apply_data(sorted_datafeed)
}

function load_data() { // Lets get all the data loaded.
    for (let n = 0; n < localStorage.length; n++){
        if(localStorage.key(n) != "randid"){
            let RAM = {};
            RAM = JSON.parse(localStorage.getItem(localStorage.key(n))); //Pull from local.
            score_datafeed.push([RAM.Username , RAM.Score]);
        }
    }
    sort_data(score_datafeed)
}

function my_user_score(){ //This is for the black box. It is for the user that is logged in.
    update_session();
    let a1 = '<div class="player_score_tag text_preset">'+ my_rank +'</div>';
    let a2 = '<div class="player_score_tag text_preset">'+ my_sessionStorage.Username +'</div>';
    let a3 = '<div class="player_score_tag text_preset">'+ my_sessionStorage.Score +'</div>';
    document.getElementById("player_score").innerHTML = a1 + a2 + a3;
    
}
 

