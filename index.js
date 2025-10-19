const precio = 400000;
const precioSpan = document.querySelector("#precio-base");
precioSpan.innerHTML = precio;

const cantidadSpan = document.querySelector("#cantidad-span");
const totalSpan = document.querySelector("#valor-total-span");

let cantidadProductos = 0;

cantidadSpan.innerHTML = cantidadProductos;
totalSpan.innerHTML = 0;

function actualizarTotal() {
    const total = precio * cantidadProductos;
    totalSpan.innerHTML = total.toLocaleString('es-CL');
}

function cambiarCantidad(cambio) {
    cantidadProductos += cambio;
    if (cantidadProductos < 0) {
        cantidadProductos = 0;
    }

    cantidadSpan.innerHTML = cantidadProductos;
    actualizarTotal();
}