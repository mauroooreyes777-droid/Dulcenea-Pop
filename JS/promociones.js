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
FILTROS ACTIVOS
========================================= */

const filtros = document.querySelectorAll(".filtro-promo");


filtros.forEach(filtro => {

    filtro.addEventListener("click", () => {

        filtros.forEach(btn => {

            btn.classList.remove("active");

        });

        filtro.classList.add("active");

    });

});



/* =========================================
BOTONES PROMOS
========================================= */

const botonesPromo = document.querySelectorAll(".btn-promo");


botonesPromo.forEach(btn => {

    btn.addEventListener("click", () => {


        /* TEXTO ORIGINAL */

        const textoOriginal = btn.innerHTML;


        /* EFECTO */

        btn.innerHTML = "Cargando ✨";


        setTimeout(() => {

            btn.innerHTML = "Listo 💖";

        }, 800);


        setTimeout(() => {

            btn.innerHTML = textoOriginal;

        }, 1800);

    });

});



/* =========================================
ANIMACION CARDS
========================================= */

const promoCards = document.querySelectorAll(".promo-card");


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


promoCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        ".6s ease";

    observer.observe(card);

});



/* =========================================
BOTON NOTIFICACIONES
========================================= */

const btnNotificaciones =
    document.querySelector(".btn-notificaciones");


btnNotificaciones.addEventListener("click", () => {

    btnNotificaciones.innerHTML =
        "Activadas 💕";


    btnNotificaciones.style.background =
        "linear-gradient(45deg,#c77dff,#ff69b4)";


    setTimeout(() => {

        btnNotificaciones.innerHTML =
            "Activar notificaciones";

    }, 2500);

});



/* =========================================
HOVER GLOW CARDS
========================================= */

promoCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;


        card.style.backgroundPosition =
            `${x / 5}px ${y / 5}px`;

    });

});



/* =========================================
EFECTO FAVORITO EN PROMOS
========================================= */

const badges = document.querySelectorAll(".badge-promo");


badges.forEach(badge => {

    badge.addEventListener("mouseenter", () => {

        badge.style.transform =
            "scale(1.08)";

    });


    badge.addEventListener("mouseleave", () => {

        badge.style.transform =
            "scale(1)";

    });

});



/* =========================================
SCROLL SUAVE
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino =
            document.querySelector(
                this.getAttribute("href")
            );

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});