let Amigo = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigos = document.getElementById("Amigo");
    const nombreamigo = inputAmigos.value.trim(); 

    // Validar que el campo no esté vacío
    if (nombreamigo === "") {
        alert("Por favor ingrese un nombre.");
        return;
    }

    if (Amigo.includes(nombreamigo)) {
        alert(`El nombre ${nombreamigo} ya está en la lista.`); 
        return;
    }

    Amigo.push(nombreamigo); // Añadimos el amigo a la lista

    inputAmigos.value = ""; // Limpiamos el campo de texto
    actualizarLista(); // Actualizamos la lista de amigos

    // Función para actualizar la lista de amigos en el HTML
    function actualizarLista() {
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = ""; // Limpiamos la lista antes de agregar nuevos amigos

        // Añadimos cada amigo a la lista
        for (let i = 0; i < Amigo.length; i++) {
            const li = document.createElement('li');
            li.textContent = Amigo[i]; // Agregamos el nombre del amigo a la lista
            listaAmigos.appendChild(li); // Lo agregamos al DOM
        }
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (Amigo.length === 0) {
        alert("No hay amigos disponibles para sortear, agrega un amigo nuevo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * Amigo.length); 
    const amigoSorteado = Amigo[indiceAleatorio]; 

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; 
}
