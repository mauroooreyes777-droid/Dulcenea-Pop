/* =========================================
CONTADOR CARRITO GLOBAL
========================================= */

const contadorCarrito =
    document.getElementById("contador-carrito");


let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];


function actualizarContador() {

    contadorCarrito.textContent =
        carrito.length;

}


actualizarContador();



/* =========================================
FORMULARIO WHATSAPP
========================================= */

const formulario =
    document.getElementById("form-contacto");


formulario.addEventListener("submit", (e) => {

    e.preventDefault();


    /* DATOS */

    const nombre =
        document.getElementById("nombre").value;

    const asunto =
        document.getElementById("asunto").value;

    const mensaje =
        document.getElementById("mensaje").value;


    /* VALIDACION */

    if (

        nombre.trim() === "" ||

        asunto === "Selecciona un tema" ||

        mensaje.trim() === ""

    ) {

        alert(
            "✨ Completa todos los campos"
        );

        return;

    }


    /* MENSAJE */

    const texto =

        `✨ Hola Dulcinea Pop ✨

💖 Nombre:
${nombre}

🛍️ Asunto:
${asunto}

💌 Mensaje:
${mensaje}`;


    /* NUMERO */

    const numero =
        "527220000000";


    /* URL */

    const url =

        `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;


    /* ABRIR */

    window.open(url, "_blank");


});



/* =========================================
ANIMACION REDES
========================================= */

const redes =
    document.querySelectorAll(".red-social");


redes.forEach(red => {

    red.addEventListener("mouseenter", () => {

        red.style.transform =
            "translateY(-8px) scale(1.03)";

    });


    red.addEventListener("mouseleave", () => {

        red.style.transform =
            "translateY(0px) scale(1)";

    });

});



/* =========================================
ANIMACION CONTACTO CARDS
========================================= */

const contactoCards =
    document.querySelectorAll(".contacto-card");


contactoCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-6px)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});



/* =========================================
ANIMACION BENEFICIOS
========================================= */

const beneficios =
    document.querySelectorAll(".beneficio-box");


beneficios.forEach(box => {

    box.addEventListener("mouseenter", () => {

        box.style.transform =
            "translateY(-8px)";

    });


    box.addEventListener("mouseleave", () => {

        box.style.transform =
            "translateY(0px)";

    });

});



/* =========================================
SCROLL ANIMADO
========================================= */

const elementos =
    document.querySelectorAll(

        ".contacto-card, .beneficio-box, .red-social"

    );


const observer =
    new IntersectionObserver(entries => {

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


elementos.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(40px)";

    el.style.transition =
        ".6s ease";

    observer.observe(el);

});



/* =========================================
BOTON WHATSAPP EFECTO
========================================= */

const btnWhatsapp =
    document.querySelector(".btn-whatsapp");


btnWhatsapp.addEventListener("mouseenter", () => {

    btnWhatsapp.style.transform =
        "translateY(-5px) scale(1.02)";

});


btnWhatsapp.addEventListener("mouseleave", () => {

    btnWhatsapp.style.transform =
        "translateY(0px) scale(1)";

});



/* =========================================
EFECTO ICONOS
========================================= */

const iconos =
    document.querySelectorAll(

        ".icono-contacto"

    );


iconos.forEach(icono => {

    icono.addEventListener("mouseenter", () => {

        icono.style.transform =
            "rotate(-8deg) scale(1.08)";

    });


    icono.addEventListener("mouseleave", () => {

        icono.style.transform =
            "rotate(0deg) scale(1)";

    });

});