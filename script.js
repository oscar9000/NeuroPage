document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json") // Carga los datos de la "base de datos"
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById("lista");
            data.forEach(item => {
                let li = document.createElement("li");
                li.innerHTML = `<a href="#" onclick="mostrarDetalle(${item.id})">${item.nombre}</a>`;
                lista.appendChild(li);
            });
            window.data = data; // Guarda los datos en una variable global
        });
});

function mostrarDetalle(id) {
    let item = window.data.find(elemento => elemento.id === id);
    document.getElementById("titulo").innerText = item.nombre;
    document.getElementById("descripcion").innerText = item.descripcion;
}
