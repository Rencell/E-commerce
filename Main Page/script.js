var menu = document.querySelector(".nav > i");
var nav = document.querySelector(".nav > ul");
var bool = true;
menu.addEventListener("click", function(){

    if(bool == true){
        nav.classList.add("active");
    }else
        nav.classList.remove("active");

    bool = !bool;
});

function goToLOGIN(){
    window.location.href="./Login Page/login.html"
}
function goProduct(){
    window.location.href="./Products Page/product.html"
}

const mediaQuery = window.matchMedia('(min-width: 700px)');

function updateButtonText(mediaQuery) {
    const button = document.getElementById('login');

    if (mediaQuery.matches) {
      button.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Sign Up';
    } else {
        button.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
    }
  }


  updateButtonText(mediaQuery);

  mediaQuery.addListener(updateButtonText);