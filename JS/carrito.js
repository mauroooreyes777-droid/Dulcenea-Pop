function enviarWhatsApp(){

    let mensaje = "Hola, quiero pedir:\n";

    carrito.forEach((item, index) => {
        mensaje += `${index + 1}. ${item.nombre} - ${item.variante}\n`;
    });

     const url = `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(mensaje)}`;
     window.open(url, "_blank");
}

let carrito = [];

function actualizarPrecio(select){
    const precio = select.value;

    const producto = select.closest(".producto-horizontal");
    const precioElemento = producto.querySelector(".precio");

    precioElemento.textContent = "$" + precio;
}

function agregarAlCarrito(boton){
    const producto = boton.closest(".producto-horizontal");

    const nombre = producto.querySelector("h2").textContent;

    const select = producto.querySelector(".selector-kit");
    const variante = select.options[select.selectedIndex].text;
    const precio = select.value;

    carrito.push({
        nombre: nombre,
        variante: variante,
        precio: precio
    });

    console.log(carrito);
    alert("Producto agregado al carrito");
}

let Carrito = [];

// seleccionar opción
document.querySelectorAll(".opcion").forEach(opcion => {

    opcion.addEventListener("click", function(){

        const producto = this.closest(".producto-horizontal");

        // quitar selección anterior
        producto.querySelectorAll(".opcion").forEach(o => {
            o.classList.remove("activa");
        });

        // activar la seleccionada
        this.classList.add("activa");

        // cambiar precio visual
        const precio = this.dataset.precio;
        const precioElemento = producto.querySelector(".precio");

        precioElemento.textContent = "$" + precio;

    });

});

function agregarAlCarrito(boton){

    const producto = boton.closest(".producto-horizontal");

    const nombre = producto.querySelector("h2").textContent;

    const opcionSeleccionada = producto.querySelector(".opcion.activa");

    if(!opcionSeleccionada){
        alert("Selecciona un kit primero");
        return;
    }

    const variante = opcionSeleccionada.textContent;
    const precio = opcionSeleccionada.dataset.precio;

    carrito.push({
        nombre: nombre,
        variante: variante,
        precio: precio
    });

    console.log(Carrito);
    alert("Producto agregado");
}