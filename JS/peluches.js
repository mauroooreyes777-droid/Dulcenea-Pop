/* =========================================
PREVIEW IMAGEN
========================================= */

const inputImagen = document.getElementById("link-imagen");

const previewImg = document.getElementById("preview-img");


inputImagen.addEventListener("change", function () {

    const archivo = this.files[0];

    if (archivo) {

        const lector = new FileReader();

        lector.onload = function (e) {

            previewImg.src = e.target.result;

        };

        lector.readAsDataURL(archivo);

    }

});



/* =========================================
BOTONES CANTIDAD
========================================= */

const cantidadInput = document.getElementById("cantidad");

const btnSumar = document.getElementById("sumar");

const btnRestar = document.getElementById("restar");


btnSumar.addEventListener("click", () => {

    cantidadInput.value++;

});


btnRestar.addEventListener("click", () => {

    if (cantidadInput.value > 1) {

        cantidadInput.value--;

    }

});



/* =========================================
SELECCION TAMAÑOS
========================================= */

const sizeCards = document.querySelectorAll(".size-card");


sizeCards.forEach(card => {

    card.addEventListener("click", () => {

        sizeCards.forEach(c => {

            c.classList.remove("active");

        });

        card.classList.add("active");

    });

});



/* =========================================
CONTADOR CARRITO GLOBAL
========================================= */

const contadorCarrito = document.getElementById("contador-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function actualizarContador() {

    contadorCarrito.textContent = carrito.length;

}


actualizarContador();



/* =========================================
AGREGAR AL CARRITO
========================================= */

const btnAgregar = document.getElementById("btn-almohadas");


btnAgregar.addEventListener("click", () => {

    const sizeSeleccionado = document.querySelector(".size-card.active");

    const nombreTamano = sizeSeleccionado.querySelector("h3").textContent;

    const precioTexto = sizeSeleccionado.querySelector("span").textContent;

    const precio = parseFloat(
        precioTexto.replace("$", "")
            .replace("c/u", "")
    );

    const cantidad = parseInt(cantidadInput.value);


    const producto = {

        id: Date.now(),

        nombre: "Almohada personalizada",

        tamaño: nombreTamano,

        precio: precio,

        cantidad: cantidad,

        imagen: previewImg.src

    };


    carrito.push(producto);


    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );


    actualizarContador();


    alert("💕 Producto agregado al carrito");

});