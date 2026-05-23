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

    // DATOS CLIENTE

    const nombre = document.getElementById("nombre").value;

    const telefono = document.getElementById("telefono").value;

    const direccion = document.getElementById("direccion").value;

    const referencias = document.getElementById("referencias").value;

    const fecha = document.getElementById("fecha").value;

    const notas = document.getElementById("notas").value;

    // VALIDACIONES

    console.log("VALIDACION")

    if (
        nombre.trim() === "" ||
        telefono.trim() === "" ||
        direccion.trim() === "" ||
        fecha.trim() === ""
    ) {

        mostrarToastError("Completa los campos obligatorios");

        return;
    }


    // MENSAJE

    let mensaje = "Hola ✨\n\n";

    mensaje += "Quiero realizar un pedido:\n\n";


    // DATOS CLIENTE

    mensaje += `Nombre: ${nombre}\n`;

    mensaje += `Teléfono: ${telefono}\n`;

    mensaje += `Dirección: ${direccion}\n`;

    mensaje += `Referencias: ${referencias}\n`;

    mensaje += `Fecha de entrega: ${fecha}\n`;

    mensaje += `Notas extras: ${notas}\n\n`;


    // PRODUCTOS

    mensaje += "🛒 Pedido:\n\n";

    let total = 0;

    carrito.forEach((item, index) => {

        const subtotal = item.precio * item.cantidad;

        mensaje += `${index + 1}. ${item.nombre}\n`;

        mensaje += `${item.variante}\n`;

        mensaje += `Cantidad: ${item.cantidad}\n`;

        mensaje += `Subtotal: $${subtotal}\n\n`;

        total += subtotal;
    });


    // TOTAL

    mensaje += `Total: $${total}\n`;

    mensaje += `Embalaje: por confirmar\n`;

    mensaje += `Envío: por confirmar\n\n`;

    mensaje += "Gracias";


    // NUMERO WHATSAPP

    const numero = "5217223217694";


    // URL

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;


    // ABRIR

    cerrarModal();

    mostrarToastFinal();

    setTimeout(() => {

        window.open(url, "_blank");

    }, 3000);
}


// ==========================

renderizarCarrito();

// =========================
// MODAL
// =========================

function abrirModal() {

    document.getElementById("modalPedido").style.display = "flex";
}


function cerrarModal() {

    document.getElementById("modalPedido").style.display = "none";
}

// =========================
// FECHA MINIMA ENTREGA
// =========================

const fechaInput = document.getElementById("fecha");

const hoy = new Date();

hoy.setDate(hoy.getDate() + 3);

const año = hoy.getFullYear();

const mes = String(hoy.getMonth() + 1).padStart(2, "0");

const dia = String(hoy.getDate()).padStart(2, "0");

const fechaMinima = `${año}-${mes}-${dia}`;

fechaInput.min = fechaMinima;

function mostrarToastError(texto) {

    const toast = document.getElementById("toast");

    toast.textContent = texto;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}

function mostrarToastFinal() {

    const toast = document.getElementById("toast");

    toast.textContent = "Espera la confirmación de tu pedido vía WhatsApp ✨";

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 7000);
}

// LIMPIAR TOAST AL CARGAR

window.addEventListener("load", () => {

    const toast = document.getElementById("toast");

    toast.classList.remove("show");
});