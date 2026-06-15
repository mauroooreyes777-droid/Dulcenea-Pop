document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.querySelector("#menuButton");
  const dropdownMenu = document.querySelector("#dropdownMenu");

  if(menuButton && dropdownMenu){
      menuButton.addEventListener("click", function(){
          dropdownMenu.classList.toggle("open");
      });

      document.addEventListener("click", function(event){
          if(!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)){
              dropdownMenu.classList.remove("open");
          }
      });
  }
});

document.querySelectorAll(".slider-box").forEach((slider) => {
  const slides = slider.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
  },3000);
  
});

/* ===================
CONTADOR CARRITO
=====================*/

const contadorCarrito =
document.getElementById(
  "contador-carrito"
);

if(contadorCarrito){

  let carrito = JSON.parse(

    localStorage.getItem(
      "carrito"
    )

  ) || [];

  let total = 0;

  carrito.forEach(Item => {

    total += parseInt(
      Item.cantidad || 1
    );
  });

  contadorCarrito.textContent =
  total;
}

/* ========================================
BUSCADOR
======================================== */

const btnBuscar =
    document.getElementById("btnBuscar");

const searchBox =
    document.getElementById("searchBox");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


if (btnBuscar) {

    btnBuscar.addEventListener("click", () => {

        searchBox.classList.toggle("open");

    });

}


/* ========================================
CATEGORIAS
======================================== */

const categorias = [

    {
        nombre: "TV",

        link: "../HTML/tv.html",

        palabras: [
            "stitch",
            "lilo",
            "angel",
            "melody",
            "kuromi",
            "hello kitty",
            "princesas",
            "frozen",
            "moana",
            "encanto",
            "mickey",
            "minnie",
            "disney"
        ]
    },

    {
        nombre: "ANIMALES",

        link: "../HTML/animales.html",

        palabras: [
            "gato",
            "perro",
            "panda",
            "leon",
            "tigre",
            "elefante",
            "conejo",
            "oso",
            "zorro"
        ]
    },

    {
        nombre: "VEHICULOS",

        link: "../HTML/vehiculos.html",

        palabras: [
            "f1",
            "formula 1",
            "ferrari",
            "mustang",
            "lamborghini",
            "bmw",
            "audi",
            "camion",
            "moto"
        ]
    },

    {
        nombre: "MÚSICA",

        link: "../HTML/musica.html",

        palabras: [
            "bts",
            "blackpink",
            "taylor swift",
            "twice",
            "stray kids",
            "kpop",
            "cantante"
        ]
    },

    {
        nombre: "ROPA",

        link: "../HTML/ropa.html",

        palabras: [
            "ropa",
            "vestido",
            "zapatos",
            "bolsa",
            "moda"
        ]
    },

    {
        nombre: "CRAYOLANDIA",

        link: "../HTML/crayolandia.html",

        palabras: [
            "unicornio",
            "arcoiris",
            "fantasia",
            "magico"
        ]
    },

    {
        nombre: "PAISAJE",

        link: "../HTML/paisaje.html",

        palabras: [
            "paisaje",
            "montaña",
            "bosque",
            "cascada",
            "naturaleza",
            "rio"
        ]
    },

    {
        nombre: "COMIDA",

        link: "../HTML/comida.html",

        palabras: [
            "pizza",
            "hamburguesa",
            "taco",
            "comida",
            "papas",
            "helado"
        ]
    },

    {
        nombre: "ESPACIO EXTERIOR",

        link: "../HTML/espacio.html",

        palabras: [
            "astronauta",
            "planeta",
            "cohete",
            "luna",
            "sol",
            "galaxia"
        ]
    },

    {
        nombre: "DEPORTE",

        link: "../HTML/deporte.html",

        palabras: [
            "futbol",
            "basquet",
            "tenis",
            "voleibol",
            "deporte",
            "nba"
        ]
    },

    {
        nombre: "JUGUETES",

        link: "../HTML/juguetes.html",

        palabras: [
            "muñeca",
            "robot",
            "juguete",
            "osito",
            "lego"
        ]
    },

    {
        nombre: "VIDEOJUEGOS",

        link: "../HTML/videojuegos.html",

        palabras: [
            "minecraft",
            "mario",
            "sonic",
            "pokemon",
            "roblox",
            "fortnite"
        ]
    },

    {
        nombre: "SHOWS",

        link: "../HTML/shows.html",

        palabras: [
            "moana",
            "frozen",
            "encanto",
            "pelicula",
            "show"
        ]
    },

    {
        nombre: "ESCUELA",

        link: "../HTML/escuela.html",

        palabras: [
            "escuela",
            "maestro",
            "libro",
            "lapiz",
            "estudiante"
        ]
    },

    {
        nombre: "RELIGION",

        link: "../HTML/religion.html",

        palabras: [
            "jesus",
            "virgen",
            "iglesia",
            "dios",
            "religion"
        ]
    }

];


/* ========================================
FILTRAR
======================================== */

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const texto =
            searchInput.value.toLowerCase();

        searchResults.innerHTML = "";

        categorias.forEach(categoria => {

            const coincide =

                categoria.palabras.some(

                    palabra =>

                        palabra.includes(texto)

                );

            if (texto !== "" && coincide) {

                searchResults.innerHTML +=

                    `
                    <div
                        class="resultado"
                        onclick="window.location='${categoria.link}'">

                        📂 ${categoria.nombre}

                    </div>
                    `;

            }

        });

    });

}