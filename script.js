//hamberger menu

hamberger = document.querySelector('.hamburger');
hamberger.onclick = function (){
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active')
}