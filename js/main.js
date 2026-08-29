const botonCotizar = document.getElementById("btnCotizar");

botonCotizar.addEventListener("click", function () {
    const marca = document.getElementById("marca").value.trim();
    const modelo = document.getElementById("modelo").value.trim();
    const anio = document.getElementById("anio").value.trim();
    const motor = document.getElementById("motor").value.trim();

    if (!marca || !modelo || !anio || !motor) {
        alert("Por favor completa todos los datos del vehículo.");
        return;
    }

    const mensaje = `Hola, quisiera cotizar un radiador para un ${marca} ${modelo} ${anio}, motor ${motor}.`;

    const telefono = "526531625030";

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});