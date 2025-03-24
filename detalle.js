document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let item = data.find(elemento => elemento.id == id);
            if (item) {
                document.getElementById("titulo").innerText = item.nombre;
                document.getElementById("descripcion").innerText = item.descripcion;
            } else {
                document.getElementById("titulo").innerText = "Elemento no encontrado";
            }
        });
});
