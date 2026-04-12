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

  // POST-IT (esto ya no se rompe)
  const contenido = [
      {
          title: "PROMOCIÓN",
          text: "2x1 en plumones esta semana"
      },
      {
          title: "MÁS VENDIDOS",
          text: "Caja de crayolas + colores jumbo"
      },
      {
          title: "COMBO ESCOLAR",
          text: "Kids desde $89"
      }
  ];

  let postitIndex = 0;

  setInterval(() => {
      postitIndex = (postitIndex + 1) % contenido.length;

      const title = document.getElementById("postit-title");
      const text = document.getElementById("postit-text");

      if(title && text){
          title.innerText = contenido[postitIndex].title;
          text.innerText = contenido[postitIndex].text;
      }

  }, 3000);

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