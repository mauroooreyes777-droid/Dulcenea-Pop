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