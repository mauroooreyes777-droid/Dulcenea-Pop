// ==========================
// CARRITO
// ==========================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// ==========================
// SELECCIONAR KITS
// ==========================

document.querySelectorAll(".opcion").forEach(opcion => {

    opcion.addEventListener("click", function () {

        const kits = this.closest(".kits");

        kits.querySelectorAll(".opcion").forEach(o => {
            o.classList.remove("active");
        });

        this.classList.add("active");

        // cambiar precio visual
        const precio = this.dataset.precio;

        const producto = this.closest(".producto-horizontal");

        const precioElemento = producto.querySelector(".precio");

        precioElemento.textContent = "$" + precio;

    });

});


// ==========================
// AGREGAR AL CARRITO
// ==========================

function agregarAlCarrito(boton) {

    console.log(boton.dataset.img);

    const producto = boton.closest(".card-producto");

    const nombre = producto.querySelector("h2").textContent;

    const opcionSeleccionada = producto.querySelector(".opcion.active");

    if (!opcionSeleccionada) {

        alert("Selecciona un kit primero");

        return;
    }

    const variante = opcionSeleccionada.textContent.trim();

    const precio = Number(opcionSeleccionada.dataset.precio);

    const productoCarrito = {

        id: nombre + "-" + precio,

        nombre: nombre,

        variante: variante,

        precio: precio,

        img: boton.dataset.img,

        cantidad: 1
    };

    const existe = carrito.find(item => item.id === productoCarrito.id);

    if (existe) {

        existe.cantidad++;

    } else {

        carrito.push(productoCarrito);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    console.log(carrito);

    actualizarContador();

    mostrarToast();

    function mostrarToastFinal() {

        const toast = document.getElementById("toast");

        toast.textContent = "Espera la confirmación de tu pedido vía WhatsApp ✨";

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

            toast.textContent = "Producto agregado ✨";

        }, 4000);
    }
}

function actualizarContador() {

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let totalProductos = 0;

    carrito.forEach(producto => {

        totalProductos += producto.cantidad;
    });

    document.getElementById("contador-carrito").textContent = totalProductos;
}

actualizarContador();

function mostrarToast() {

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);
}