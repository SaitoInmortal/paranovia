function moverPosicionRandom(elm){
    elm.style.position = "absolute";
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + "px";
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + "px";
}
let btsi = document.getElementById("btn_si");
let btno = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btno.addEventListener("mouseenter", function(e){moverPosicionRandom(e.target)})
btsi.addEventListener("click", function(e){
    alert("sabia que dirias que si");

    divModoSexo.style.display = "block";
    const cancion = new Audio("img\\modo_hot.mp3");
    cancion.play
});