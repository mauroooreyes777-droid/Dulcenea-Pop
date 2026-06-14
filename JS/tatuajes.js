// =========================
// ELEMENTOS
// =========================

const inputImagen = document.getElementById("link-imagen");

const previewImg = document.getElementById("preview-img");

const btnTatuajes = document.getElementById("btn-tatuajes");

let imagenSeleccionada = "";


// =========================
// PREVIEW IMAGEN
// =========================

inputImagen.addEventListener("change", (e) => {

    const archivo = e.target.files[0];

    if (!archivo) return;

    const reader = new FileReader();

    reader.onload = function (evento) {

        previewImg.src = evento.target.result;

        imagenSeleccionada = evento.target.result;
    };

    reader.readAsDataURL(archivo);
});


// =========================
// AGREGAR AL CARRITO
// =========================

btnTatuajes.addEventListener("click", () => {


    const tamano = document.getElementById("tamano").value;

    const cantidad = document.getElementById("cantidad").value;

    const notas = document.getElementById("notas").value;


    // VALIDACION

    if (imagenSeleccionada === "") {

        alert("Selecciona una imagen 💖");

        return;
    }


    // PRODUCTO

    const tatuaje = {

        tipo: "Tatuajes personalizados",

        imagen: imagenSeleccionada,

        tamano: tamano,

        cantidad: cantidad,

        notas: notas
    };


    // CARRITO

    let carrito = JSON.parse(

        localStorage.getItem("carrito")

    ) || [];


    carrito.push(tatuaje);


    localStorage.setItem(

        "carrito",

        JSON.stringify(carrito)
    );


    alert("Tatuajes agregados al carrito 💖");


    // LIMPIAR

    previewImg.src = "../IMGA/dulcenea logo.png";

    inputImagen.value = "";

    imagenSeleccionada = "";

    document.getElementById("cantidad").value = 1;

    document.getElementById("notas").value = "";
});

/* =========================
CONTADOR CARRITO
========================= */

const contador =
    document.getElementById("contador-carrito");


let carrito = JSON.parse(
    localStorage.getItem("carrito")
) || [];


/* TOTAL ITEMS */

let total = 0;

carrito.forEach(producto => {

    total += producto.cantidad || 1;
});


contador.textContent = total;

const cantidadInput = document.getElementById("cantidad");

document.getElementById("sumar").addEventListener("click", () => {

    cantidadInput.value++;

});

document.getElementById("restar").addEventListener("click", () => {

    if (cantidadInput.value > 1) {

        cantidadInput.value--;

    }

});