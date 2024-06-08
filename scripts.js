document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.style.maxHeight = navLinks.style.maxHeight ? null : '300px';
    });
});
