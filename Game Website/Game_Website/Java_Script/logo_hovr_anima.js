// I made this for my AMAIZING logo to magesticly hover. 
function stick_to_mouse(event){
    var l_h_a_act = false;  //Useful switch.
    if(l_h_a_act == false){

        l_h_a_act = true;
        let pos_x_off = (window.innerWidth / 100) * 50; //Getting sizes.
        let pos_x = event.clientX - pos_x_off;
        let Logo = document.getElementById("Nerve_Boost_Logo")

        if(pos_x > (window.innerWidth / 100) * -40 && pos_x < (window.innerWidth / 100) * 40){ //Making sure my logo does not slide off somewhere.
        Logo.style.left = pos_x + 'px';} //Move my logo.

        setTimeout(function(){ l_h_a_act = false;}, 1000);

        }
    }
