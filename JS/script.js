const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener("click", function() {

    const type = password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type" , type);

});

const guestLogin = document.querySelector ("#guestLogin");
    guestLogin.addEventListener("click" , function(){
        window.location.href = "index.html";
});
