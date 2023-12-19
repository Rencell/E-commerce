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