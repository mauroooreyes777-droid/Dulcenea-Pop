const menuButton = document.querySelector("#menuButton");
const dropdownMenu = document.querySelector("#dropdownMenu");

menuButton.addEventListener("click" , function(){

    dropdownMenu.classList.toggle("open")

});

document.addEventListener("click" , function(event){

    if(!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)){
        dropdownMenu.classList.remove("open");
    }

})