// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');  // Capturamos el input
    const nombre = input.value.trim();               // Eliminamos espacios al inicio y fin

    // Validación: el campo no debe estar vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombre);

    // Limpiar campo de entrada
    input.value = "";

    // Actualizar la lista visible de amigos
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";  // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    // Mostrar el resultado
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
