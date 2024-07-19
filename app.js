let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = [];
let numeroMaximo = 25



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}
function verificarIntento(){
    let numeroDeUsuario = parseInt  (document.getElementById('valorUsuario').value);
    if (numeroDeUsuario===numeroSecreto){
       asignarTextoElemento('p',`Asertaste el numero secreto en ${intentos}  ${(intentos==1) ? 'intento': 'intentos'}`);
       document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
    if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor')
     
    }else{
        if (numeroDeUsuario<numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor') 
        }
    } 

    intentos++;
limpiarCaja();
}return
}
console.log(listaNumerosSorteados);
if (listaNumerosSorteados.lengtn == numeroMaximo){
asignarTextoElemento('p','ya se jugaron todos los numeros posibles');
}

function generarNumeroSecreto() {
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
if (listaNumerosSorteados.includes (numeroGenerado)){
return generarNumeroSecreto();
}else{

    listaNumerosSorteados.push(numeroGenerado);

return numeroGenerado;
}

}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos=1;
console.log (numeroSecreto)
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value ='';
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}
condicionesIniciales();