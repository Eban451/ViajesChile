// Funcionalidad para que aparezca y desaparezca el Navbar según se baja en la página

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('opaque');
    } else {
        navbar.classList.remove('opaque');
    }
});