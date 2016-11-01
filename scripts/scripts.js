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

window.addEventListener('load', function () {
    lienArticles.addEventListener("mouseover", displaymenuCoques);
    menuCoques.addEventListener("mouseover", displaymenuCoques);
    lienArticles.addEventListener("mouseout", hidemenuCoques);
    menuCoques.addEventListener("mouseout", hidemenuCoques);
    
    lienHousses.addEventListener("mousemove", displaymenuHousses);
    menuHousses.addEventListener("mouseover", displaymenuHousses);
    lienHousses.addEventListener("mouseout", hidemenuHousses);
    menuHousses.addEventListener("mouseout", hidemenuHousses);
});

/*Menu responsive*/
var burgerMenu = document.getElementById("burgermenu");
var menuLi = document.getElementsByClassName("menu-item");
var menu = document.getElementById("menu");
var isMenuDisplayed = false;

function displaymenu(event) {
    if (isMenuDisplayed === true) {
        for (var i = 0; i < menuLi.length; i++){
            menuLi[i].style.display = "none"; 
        }
        menu.style.flexDirection = "row";
        menu.style.overflow = "hidden";
        menu.style.height = "3em";
        isMenuDisplayed = false;
    }
    else{
        for(var i = 0; i < menuLi.length; i++){
            menuLi[i].style.display = "inline"; 
        }
        menu.style.flexDirection = "column";
        menu.style.overflow = "visible";
        menu.style.height = "auto";
        isMenuDisplayed = true;
    }  
}

window.addEventListener('load', function(){
    burgerMenu.addEventListener("click", displaymenu);
});

/*défilement des nouveautés*/

var flecheGauche = document.getElementById("flechegauche");
var flecheDroite = document.getElementById("flechedroite");

function defileDroite(event){
    var barDefilante = document.getElementById("allitems");
    var position = 0;
    var id = setInterval(frame, 5);
    function frame(){
        if (position == (-60)){
            clearInterval(id);
        }
        else{
            position--
            barDefilante.style.left = position + 'em';
        }
    }
}

function defileGauche(event){
    var barDefilante = document.getElementById("allitems");
    var position = -60;
    var id = setInterval(frame, 5);
    function frame(){
        if (position == 0){
            clearInterval(id);
        }
        else{
            position++
            barDefilante.style.left = position + 'em';
        }
    }
}

window.addEventListener('load', function(){
    flecheGauche.addEventListener("click", defileGauche);
    flecheDroite.addEventListener("click", defileDroite);
});
