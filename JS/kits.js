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
CATEGORIAS ACTIVAS
========================================= */

const categorias = document.querySelectorAll(".categoria-kit");


categorias.forEach(btn => {

    btn.addEventListener("click", () => {

        categorias.forEach(categoria => {

            categoria.classList.remove("active");

        });

        btn.classList.add("active");

    });

});



/* =========================================
FAVORITOS
========================================= */

const favoritos = document.querySelectorAll(".favorito-btn");


favoritos.forEach(btn => {

    btn.addEventListener("click", () => {

        const icono = btn.querySelector("i");

        icono.classList.toggle("fa-regular");

        icono.classList.toggle("fa-solid");

    });

});



/* =========================================
AGREGAR KITS AL CARRITO
========================================= */

const botonesKits = document.querySelectorAll(".btn-kit");


botonesKits.forEach(boton => {

    boton.addEventListener("click", () => {


        /* CARD */

        const card = boton.closest(".kit-card");


        /* DATOS */

        const nombre =
            card.querySelector("h3").textContent;

        const descripcion =
            card.querySelector("p").textContent;

        const precioTexto =
            card.querySelector(".precio-kit").textContent;

        const imagen =
            card.querySelector("img").src;


        /* LIMPIAR PRECIO */

        const precio = parseFloat(

            precioTexto
                .replace("$", "")
                .replace("MXN", "")
                .trim()

        );


        /* PRODUCTO */

        const producto = {

            id: Date.now(),

            nombre: nombre,

            descripcion: descripcion,

            precio: precio,

            cantidad: 1,

            imagen: imagen

        };


        /* PUSH */

        carrito.push(producto);


        /* GUARDAR */

        localStorage.setItem(

            "carrito",
            JSON.stringify(carrito)

        );


        /* ACTUALIZAR */

        actualizarContador();


        /* FEEDBACK */

        boton.innerHTML = "Agregado 💖";

        boton.style.background =
            "linear-gradient(45deg,#c77dff,#ff69b4)";


        setTimeout(() => {

            boton.innerHTML =
                "Personalizar kit 💖";

        }, 1500);

    });

});



/* =========================================
ANIMACION SCROLL
========================================= */

const cards = document.querySelectorAll(".kit-card");


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0px)";

        }

    });

}, {
    threshold: .1
});


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        ".6s ease";

    observer.observe(card);

});



/* =========================================
BOTON CTA
========================================= */

const btnCrearKit =
    document.querySelector(".btn-crear-kit");


btnCrearKit.addEventListener("click", () => {

    alert(
        "✨ Próximamente podrás crear kits totalmente personalizados 💖"
    );

});