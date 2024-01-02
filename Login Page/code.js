function backHome(){
    window.location.href="../index.html"
}
//const login = document.querySelector(".login > form");

document.addEventListener("DOMContentLoaded", function () {
    let register = document.querySelector(".register-form");
    let login = document.querySelector(".login-form");
    let backButton = document.getElementById("backButton");
    let backLogin = document.getElementById("backLogin");

    backButton.addEventListener("click", function () {
        login.classList.remove("active");
        register.classList.add("active");
        // Additional logic if needed
    });

    backLogin.addEventListener("click", function () {
        register.classList.remove("active");
        login.classList.add("active");
        // Additional logic if needed
    });
});




