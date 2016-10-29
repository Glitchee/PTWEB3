var menuCoques = document.getElementById("menuCoques");
var menuHousses = document.getElementById("menuHousses");
var lienArticles = document.getElementById("coques");
var lienHousses = document.getElementById("housses");

function displaymenuCoques(event) {
    menuCoques.style.height = '165px';
}

function hidemenuCoques(event) {
    menuCoques.style.height = '0';
}

function displaymenuHousses(event) {
    menuHousses.style.height = '165px';
}

function hidemenuHousses(event) {
    menuHousses.style.height = '0';
}

window.addEventListener('load', function(){
    lienArticles.addEventListener("mouseover", displaymenuCoques);
    menuCoques.addEventListener("mouseover", displaymenuCoques);
    lienArticles.addEventListener("mouseout", hidemenuCoques);
    menuCoques.addEventListener("mouseout", hidemenuCoques);
    
    lienHousses.addEventListener("mousemove", displaymenuHousses);
    menuHousses.addEventListener("mouseover", displaymenuHousses);
    lienHousses.addEventListener("mouseout", hidemenuHousses);
    menuHousses.addEventListener("mouseout", hidemenuHousses);
});

/*défilement de l'image Tendances*/

/*function animate(event){
    var imgDefilante = document.getElementById("tendances");
    var position = 0;
    var id = setInterval(frame, 30);
    function frame(){
        if (position == (-140)){
            clearInterval(id);
        }
        else{
            position--
            imgDefilante.style.left = position + 'em';
        }
    }
}

window.addEventListener('load', animate);*/
