const listaCarrito = document.getElementById("lista-carrito");

const totalPrecio = document.getElementById("total-precio");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// ==========================
// RENDERIZAR
// ==========================

function renderizarCarrito() {

    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach((item, index) => {

        total += item.precio * item.cantidad;

        listaCarrito.innerHTML += `

<div class="producto-carrito">

    <div class="img-producto">

        <img src="${item.img}" alt="${item.nombre}">

    </div>

    <div class="info">

        <h3>${item.nombre}</h3>

        <p>${item.variante}</p>

        <p class="precio">$${item.precio}</p>

    </div>

    <div class="cantidad">

        <button onclick="restarCantidad(${index})">
            -
        </button>

        <span>${item.cantidad}</span>

        <button onclick="sumarCantidad(${index})">
            +
        </button>

    </div>

    <button class="eliminar"
    onclick="eliminarProducto(${index})">

        <i class="fa-solid fa-trash"></i>

    </button>

</div>

`;

    });

    totalPrecio.textContent = "$" + total;
}


// ==========================
// SUMAR
// ==========================

function sumarCantidad(index) {

    carrito[index].cantidad++;

    guardarCarrito();
}


// ==========================
// RESTAR
// ==========================

function restarCantidad(index) {

    carrito[index].cantidad--;

    if (carrito[index].cantidad <= 0) {

        carrito.splice(index, 1);
    }

    guardarCarrito();
}


// ==========================
// ELIMINAR
// ==========================

function eliminarProducto(index) {

    carrito.splice(index, 1);

    guardarCarrito();
}


// ==========================
// GUARDAR
// ==========================

function guardarCarrito() {

    localStorage.setItem("carrito", JSON.stringify(carrito));

    renderizarCarrito();
}


// ==========================
// WHATSAPP
// ==========================

function enviarWhatsApp() {

    let mensaje = "Hola, quiero pedir:%0A%0A";

    carrito.forEach((item, index) => {

        mensaje += `${index + 1}. ${item.nombre} - ${item.variante} - Cantidad: ${item.cantidad} - $${item.precio}%0A`;

    });

    const url = `https://wa.me/521XXXXXXXXXX?text=${mensaje}`;

    window.open(url, "_blank");
}


// ==========================

renderizarCarrito();