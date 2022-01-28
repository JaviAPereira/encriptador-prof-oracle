var encriptar = document.querySelector("#btn-encriptar");
var desencriptar = document.querySelector("#btn-desencriptar");
var copiar = document.querySelector("#btn-copy");

function encript(){
    var texto = document.querySelector("#input-texto").value;
    var textoEncriptado = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    document.querySelector("#msg").value = textoEncriptado;
    document.querySelector("#input-texto").value;
}
encriptar.addEventListener("click",function(event){
    event.preventDefault();
    encript();
})

function desencript(){
    var texto = document.querySelector("#input-texto").value;
    var textoDesencriptado = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.querySelector("#msg").value = textoDesencriptado;
    document.querySelector("#input-texto").value;
}
desencriptar.addEventListener("click",function(event){
    event.preventDefault();
    desencript();
})
