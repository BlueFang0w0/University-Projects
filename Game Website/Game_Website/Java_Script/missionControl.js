// This is my game script. Could have done better tbh. But still tried to keep it fairly neat.

// Initial variables are set up now.
let screen_h = window.innerHeight;
let screen_w = window.innerWidth;
let score = 0;
let welcoming_text = "R4 Productions presents...";
let welcoming_text_2 = "Nerve Boost The Game";
let welcoming_text_3 = "Logged in as: ";
let display_intro = "";
let text_pos_x1 = 20;
let text_pos_y1 = 50;
let welcom_seq_wait = 100;
let welcome_seq_wait_before_clear = 500;
let running = false;
let running_2 = false;
let Logged_In = false;

// Fitting to your screen.
let spaceRelay = document.getElementById("mySpace");
let spaceCommander = spaceRelay.getContext("2d"); // My receiver.
spaceCommander.canvas.width  = screen_w - 100;
spaceCommander.canvas.height =  screen_h - 200;



// Adjusting Text.
spaceCommander.fillStyle = "white";
spaceCommander.font = "bold 50px Arial";

// Welcoming sequence. Cause I did not want to use the ugly built in one. So I made my own.
function AnimatedTextIntro(i) {
running = true;
if (display_intro.length <i.length ) {
    setTimeout(() => {  
        display_intro = display_intro.concat(i.charAt(display_intro.length));  //Essentially it just adds letters one by one with a timeout untill there is none left to add.
        spaceCommander.fillText(display_intro, text_pos_x1, text_pos_y1);
        AnimatedTextIntro(i);
    }, welcom_seq_wait);
} 
else {
    display_intro = "";
    setTimeout(() => {
        spaceCommander.clearRect ( 0 , 0 , spaceCommander.canvas.width , spaceCommander.canvas.height ); //I added a clear feature after a few seconds.
    }, welcome_seq_wait_before_clear); 
    running = false;
}
}

let concat_space = "";

function schedule(){ // Schedulers I use to deal with timing issues.
    running_2 = true;
    if(running === true){
        setTimeout(schedule, 50);
        return;
    }
    running_2 = false;
    setTimeout(() => {AnimatedTextIntro(welcoming_text_2)},1500)
}

function schedule_2(){
    if(running_2 === true){
        setTimeout(schedule_2, 50);
        return;
    }
    setTimeout(() => {AnimatedTextIntro(welcoming_text_3 + concat_space)},6000) // This one takes my concat_space and uses it to show if you are logged in or not. This part only stiches words.
}


AnimatedTextIntro(welcoming_text) 
schedule()
    



// Game variables.

let system_interval = 20; //This is a 10 milisecond delay. Meaning 1s = 1000ms , therefore 1000ms / 20ms = 50eps or 50 executions per second. 
let system_run = false; // Pause?
let time = 0; // How long the loop has ran for in seconds.
let eps = 1000 / system_interval; // Executions Per Second.
let virtual_space_x = 1000;
let virtual_space_y = 1000;
let mouse_x = 0;
let mouse_y = 0;
let counter = 50;
let keys_active = [];
let space_accumulator = 0;


if(sessionStorage.getItem(sessionStorage.key(0)) == null){ // This is what helps check if the user is logged in.
    Logged_In = false;
    concat_space = "Guest = No save game.";
    schedule_2();
    setTimeout(() => {system_run = true;},15000)
}else{ 
    update_session(); // In case you are wondering about this. This is from anoter js which you will see. It simply refreshes data.
    Logged_In = true;
    concat_space = my_sessionStorage.Username;
    schedule_2();
    setTimeout(() => {system_run = true;},15000)
}

//I felt like using map would work here and make my code look neater.
let ships = new Map();
ships['Blue Chronos'] = new Image();
ships['Blue Chronos'].src = 'Assets/Game_Assets/Blue_Cronos.png';
ships['Crimson Stratos'] = new Image();
ships['Crimson Stratos'].src = 'Assets/Game_Assets/Crimson_Stratos.svg';

let meteors = new Map();
meteors[0] = new Image();
meteors[0].src = 'Assets/Game_Assets/meteor_1.svg';
meteors[1] = new Image();
meteors[1].src = 'Assets/Game_Assets/meteor_2.svg';
meteors[2] = new Image();
meteors[2].src = 'Assets/Game_Assets/meteor_3.svg';
meteors[3] = new Image();
meteors[3].src = 'Assets/Game_Assets/meteor_4.svg';
meteors[4] = new Image();
meteors[4].src = 'Assets/Game_Assets/meteor_5.svg';
meteors[5] = new Image();
meteors[5].src = 'Assets/Game_Assets/meteor_6.svg';
meteors[6] = new Image();
meteors[6].src = 'Assets/Game_Assets/meteor_alien.svg';

// GAME CODE...

function generate_random(from, to){
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

class Object { // I decided to make this so it's easier to manage objects.  =================================== Class Begins
    constructor(name , position_x , position_y , hit_box , top_speed , idle_ration , scale , angle , hide){
        this.name = name; 
        this.position_x = position_x;
        this.position_y = position_y;
        this.hit_box = hit_box;
        this.top_speed = top_speed;
        this.idle_ration = idle_ration; 
        this.scale = scale;
        this.angle = angle;
        this.hide = hide;
    } 
    
    // Methods below are my attempt  at a more complex movement system. I wanted for that smooth movement without frame jumping. 
    // I expect to use these methods of pretty much every single object. 
    // My methods are pretty self explanatory, just read the names. I left a few notes where I thought they may be needed.

    eps_hop(){
        return Math.floor(eps/this.idle_ration) //How many executions to wait before executing.
    }

    move(x_momentum, y_momentum){
        let eps_hop_accumulator = this.eps_hop(); //Will contain the jump gaps or ow many executions to wait before executing.
        if(eps_hop_accumulator < counter){ //If counter exeeds the accumulator. Do:

            if(eps_hop_accumulator < eps){ //Only execute this if not exeeding max executions.
                eps_hop_accumulator += this.eps_hop(); // Increase accumulator by eps_hop as long as it does not exeed eps.
                this.position_x += x_momentum; //It's a step so it must move the object.
                this.position_y += y_momentum;
            }else{
                eps_hop_accumulator = this.eps_hop(); // If exeeding max
                this.position_x += x_momentum;
                this.position_y += y_momentum;
            }
        }
    }

    
    render(File){
        spaceCommander.drawImage(File, this.position_x, this.position_y, this.scale, this.scale);
    }

    clear(){
        spaceCommander.clearRect( this.position_x - 10, this.position_y - 10,this.scale + 20, this.scale + 20);
    }

    display_collision(){
        spaceCommander.fillStyle = "white";
        spaceCommander.beginPath();
        spaceCommander.fillRect(this.position_x , this.position_y , this.scale , this.scale );
        spaceCommander.stroke();
    }

    set_autoHide(){
        if(this.name == "rock1" | this.name == "rock2" | this.name == "rock3"){
            if(this.hide <= 1){
                one_meteor = one_meteor_2
                two_meteor = two_meteor_2
                three_meteor = three_meteor_2
            } this.hide --;
        }
        
    }
} // =================================== Class Ends

let Player = new Object("User" , 0 , 0 , 0 , 5 , 50 , 200 , 90 , false); // Technically player is also an object.
let one_meteor = new Object("rock1" , generate_random(100, 1720) , -50 , 0 , 5 , 50 , 50 , 90 , 837); // Could have been done better but I  literally had no time.
let two_meteor = new Object("rock2" , generate_random(100, 1720) , -50 , 0 , 5 , 50 , 50 , 90 , 837);
let three_meteor = new Object("rock3" , generate_random(100, 1720) , -50 , 0 , 5 , 50 , 50 , 90 , 837);
let four_meteor = new Object("rock4" , generate_random(100, 1720) , -50 , 0 , 5 , 50 , 50 , 90 , 837);


let player_hit_box = [ // Needed for a feature.
    [50 , Player.position_x + 200],
    [50 , Player.position_y + 200]
];

function clearALL(){spaceCommander.clearRect( 0 , 0 , spaceCommander.canvas.width , spaceCommander.canvas.height );} // Some things had to be moved to work with other functions. This cleans the WHOLE canvas.

function restart(){ //This is what my restart button does.
    time = 0;
    system_interval = 20;  
    eps = 1000 / system_interval; 
    virtual_space_x = 1000;
    virtual_space_y = 1000;
    mouse_x = 0;
    mouse_y = 0;
    counter = 50;
    one_meteor.position_y = -50;
    two_meteor.position_y = -50;
    three_meteor.position_y = -50;
    four_meteor.position_y = -50;
    system_run = true; 
    clearALL();

}
// Event listeners for user interaction.

spaceCommander.canvas.addEventListener('mousemove', function(event) {

    mouse_x = event.clientX;
    mouse_y = event.clientY;

});

window.addEventListener('keydown', function(event){
    
    if(keys_active.includes(event.key) == false){
        keys_active.push(event.key);
        if(keys_active.includes('r') == true){restart();};
    }

});

window.addEventListener('keyup', function(event){
    if(keys_active.includes(event.key) == true){
        for(let i = 0 ; i < keys_active.length  ; i++){
            if(keys_active[i] == event.key){
                keys_active.splice(i,1);
            }
        }
    }
})

//This is here to provide fresh randoms. Could be done better. 
let random_img1 =  meteors[generate_random(0, 6)];
let random_img2 =  meteors[generate_random(0, 6)];
let random_img3 =  meteors[generate_random(0, 6)];
let random_img4 =  meteors[generate_random(0, 6)];
let random_speed_m1 = generate_random(4, 10);
let random_speed_m2 = generate_random(4, 10);
let random_speed_m3 = generate_random(4, 10);
let random_speed_m4 = generate_random(4, 10);

// Functions.

function object_life(name, texture, OBJmomentum_x, OBJmomentum_y) { //Renders objects.
    if(name.hide != false){
        name.render(texture);
        name.move(OBJmomentum_x,OBJmomentum_y);
    }
}

function player_life(name, texture, OBJmomentum_x, OBJmomentum_y){ //Separate render for player. 
    if(name.hide == false){
        name.render(texture);
        name.move(OBJmomentum_x,OBJmomentum_y);
}
}

function save_score(){ // Saves score if possible.
    if(sessionStorage.getItem(sessionStorage.key(0)) != null){
        update_session();
        if(my_sessionStorage.Score < time){my_sessionStorage.Score = time;}
        localStorage.setItem(my_sessionStorage.Email, JSON.stringify(my_sessionStorage));
    }
}

function run_if(){ // Animates the meteors.
    if(four_meteor.position_y > four_meteor.hide){four_meteor.position_y = -50; four_meteor.position_x = generate_random(100, 1720); random_img4 = meteors[generate_random(0, 6)]; random_speed_m4 = generate_random(4, 8);};
    if(one_meteor.position_y > four_meteor.hide){one_meteor.position_y = -50; four_meteor.position_x = generate_random(100, 1720);  random_img1 = meteors[generate_random(0, 6)]; random_speed_m1 = generate_random(4, 8);};
    if(two_meteor.position_y > four_meteor.hide){two_meteor.position_y = -50; four_meteor.position_x = generate_random(100, 1720);  random_img2 = meteors[generate_random(0, 6)]; random_speed_m2 = generate_random(4, 8);};
    if(three_meteor.position_y > four_meteor.hide){three_meteor.position_y = -50; four_meteor.position_x = generate_random(100, 1720);  random_img3 = meteors[generate_random(0, 6)]; random_speed_m3 = generate_random(4, 8);};
}


function check_collision( x_2 , y_2, wid_2, hei_2){ // Simple but works.
    if (Player.position_x < x_2 + wid_2 && Player.position_x  + Player.scale > x_2 && //Making sure there is no gap between objects.
        Player.position_y < y_2 + hei_2 && Player.position_y + Player.scale > y_2) 
        {
         system_run = false; // Stop the loop.
         save_score();
     }
}

function update_time(input){ // Clock above canvas.
    document.getElementById("mySpace_clock").innerHTML = "<b> Time: " + input;
}

function start_system(){ 
    setInterval(function(){ // =================================================== MAIN LOOP STARTS HERE - Outer loop runs 50 times a second.
        if(system_run == true){  // Essentially a switch.
            clearALL(); 
            let momentum_x = 0; // For Player movement.
            let momentum_y = 0; // For Player movement.

            if(counter < eps) {counter ++;} // This inner part will execute every second just once.
            else{ 

                time ++;
                update_time(time)
                counter = 0;
                spaceCommander.fillText(display_intro, text_pos_x1, text_pos_y1); //("rock1" , generate_random(100, 1720) , -50 , 0 , 5 , 50 , 50 , 90 , 837);
                if(space_accumulator>0){space_accumulator --;}
                
            }
            
            //Key tracking. Checks my keys.
            if(keys_active.includes('s') == true){
                if(Player.position_y < (spaceCommander.canvas.height - Player.scale)){if(momentum_y < Player.top_speed){momentum_y += 5 + space_accumulator}};};
            if(keys_active.includes('w') == true){
                if(Player.position_y > 0){if(momentum_y > (Player.top_speed - (Player.top_speed * 2))){momentum_y -= 5 + space_accumulator}};};
            if(keys_active.includes('d') == true){
                if(Player.position_x < (spaceCommander.canvas.width - Player.scale)){if(momentum_x < Player.top_speed){momentum_x += 5 + space_accumulator}};};
            if(keys_active.includes('a') == true){
                if(Player.position_x > 0){if(momentum_x > (Player.top_speed - (Player.top_speed * 2))){momentum_x -= 5 + space_accumulator}};}; 
            if(keys_active.includes('r') == true){restart();};
            if(keys_active.includes(' ') == true){if(space_accumulator < 5){space_accumulator++;}}; // Bonus feature! BOOOST!

            run_if(); // Call.

            check_collision(one_meteor.position_x, one_meteor.position_y, one_meteor.scale, one_meteor.scale); //Colision auto-compares to player.
            check_collision(two_meteor.position_x, two_meteor.position_y, two_meteor.scale, two_meteor.scale);
            check_collision(three_meteor.position_x, three_meteor.position_y, three_meteor.scale, three_meteor.scale);
            check_collision(four_meteor.position_x, four_meteor.position_y, four_meteor.scale, four_meteor.scale);

            //Make objects.
            object_life(one_meteor, random_img1, 0, random_speed_m1); //Draws the meteors.
            object_life(two_meteor, random_img2, 0, random_speed_m2);
            object_life(three_meteor, random_img3, 0, random_speed_m3);
            object_life(four_meteor , random_img4, 0, random_speed_m4);
            
           
            player_life(Player, ships['Crimson Stratos'], momentum_x , momentum_y ); // Draws the player.
        }
    }, system_interval); // =================================================== MAIN LOOP ENDS HERE
}

start_system(); // Call.





 






