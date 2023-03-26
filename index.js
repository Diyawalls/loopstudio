const closeBtn = document.querySelector('#close-btn')
const openBtn = document.querySelector('#open-btn')

const navbar = document.querySelector('.navbar-nav')

var navBar= () =>{
     navbar.classList.toggle('active')
}    
closeBtn.addEventListener('click', navBar)
openBtn.addEventListener('click', navBar)
