let cantidadProducto = 0;

function agregarProducto() {
    cantidadProducto ++;
    let contenedorCantidad = document.getElementById("cantidadComputadore");
    let tagCantidad = document.createElement("h2");
    tagCantidad.textContent = cantidadProducto;
    contenedorCantidad.appendChild(tagCantidad);
}
