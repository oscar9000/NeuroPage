document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json") // Carga los datos de la "base de datos"
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById("lista");
            data.forEach(item => {
                let option = document.createElement("option");
                option.value = item.id;
                option.textContent = item.nombre;
                lista.appendChild(option);
            });
        });
});

function irADetalle() {
    const seleccion = document.getElementById("lista").value;
    if (seleccion) {
        window.location.href = `detalle.html?id=${seleccion}`;
    } else {
        alert("Por favor, selecciona un elemento.");
    }
}
