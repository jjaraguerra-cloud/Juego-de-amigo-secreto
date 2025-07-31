// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombres
let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo() {
  let nombre = document.getElementById('amigo').value.trim();

    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    } else {
        amigos.push(nombre);
        actualizarListaAmigos();
        limpiarCaja();
    }
}

//Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  // limpiar lista
  listaAmigos.innerHTML = '';
  
    for (let nombre of amigos) {
        let nuevoLI = document.createElement('li');
        nuevoLI.textContent = nombre;
        listaAmigos.appendChild(nuevoLI);
    }
}

//Implementa una función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos disponibles. Agregar al menos un nombre');
        return;
    } else {

    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[amigoAleatorio];

    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSecreto}`;
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
    
}

//Limpiar caja y enfoque automático
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    document.querySelector('#amigo').focus();
}


function reiniciarRegistro(){
    //Limpiar caja
    amigos = [];
  listaAmigos.innerHTML = '';    
    document.getElementById('amigo').innerHTML = '';
    document.getElementById('resultado').textContent = '';
    limpiarCaja();
    //Indicar mensaje de intervalo de número
    //Generar el número aleatorio
    //Inicializar el número intentos
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

