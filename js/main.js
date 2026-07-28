const navbar = document.querySelector('.navbar')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const links = document.querySelectorAll('.link')
const overlay = document.querySelector('.overlay')

// Función para activar el Menú de Secciones
const toggleMenu = function () {

    navbar.classList.toggle('active');
    overlay.classList.toggle('active');

}

// Eventos para abrir y cerrar el Menú de Secciones
openMenu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)
overlay.addEventListener('click', toggleMenu)

links.forEach(function (link) {

    link.addEventListener('click', toggleMenu)

})

//Fecha del Copyright Automática
const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()

//Mantener Barra de Navegación y Botón Scroll Arriba fijados
const header = document.querySelector('.header')
const topBtn = document.querySelector('.top-btn')

window.addEventListener('scroll', function () {

    if (this.scrollY > 100) {
        header.classList.add('active')
        topBtn.classList.add('active')
    } else {
        header.classList.remove('active')
        topBtn.classList.remove('active')
    }

})