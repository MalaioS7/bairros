/* ESCONDERIJO DA DIV "MAPA" */
var btn=document.querySelector("#show-or-hide");
var mapa = document.querySelector(".mapa");

btn.addEventListener("click", function() {

    if(mapa.style.display=== "block") {
        mapa.style.display="none";
    } else {
        mapa.style.display = "block";
    }
    
});



/* TRANSAÇÃO - CARROSEL */
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}