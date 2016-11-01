/*choix de la quantité panier*/
var qte = parseInt(document.getElementById("quantite").value);
var field = document.getElementById("quantite");
var btnPlus = document.getElementById("plus");
var btnMoins = document.getElementById("moins");

function increment(event){
    event.preventDefault();
    field.value = qte += 1;
}

function decrement(event){
    event.preventDefault();
    field.value = qte -= 1;
}

window.addEventListener('load', function(){
    btnMoins.addEventListener("click", decrement);
    btnPlus.addEventListener("click", increment);
});