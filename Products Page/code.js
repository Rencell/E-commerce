function gotoHome(){
    window.location.href = "../index.html";
}
function gotoLogin(){
    window.location.href = "../Login Page/login.html";
}


const mediaQuery = window.matchMedia('(min-width: 700px)');

function updateButtonText(mediaQuery) {
    const button = document.getElementById('dynamicButton');
    const button1 = document.getElementById('LoginButton');

    if (mediaQuery.matches) {
      button.innerHTML = '<i class="fa-solid fa-left-long"></i>Back Home';
      button1.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>Sign Up';
    } else {
        button.innerHTML = '<i class="fas fa-left-long"></i>';
        button1.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
    }
  }


  updateButtonText(mediaQuery);

  mediaQuery.addListener(updateButtonText);
