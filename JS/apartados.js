let carrito = [];

document.querySelectorAll(".btn-carrito").forEach((btn, index) => {

    btn.addEventListener("click" , () => {

        const producto = btn.closest(".producto");
        const nombre = producto.querySelector("h3").innerText;
        const variante = producto.querySelector(".selector-kit").value;

        carrito.push({
            nombre,
            variante
        });

        console.log(carrito);
    });

});