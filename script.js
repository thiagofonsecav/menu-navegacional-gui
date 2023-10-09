const menu = document.querySelector('.menu');
const submenu = document.querySelector('.submenu');

menu.addEventListener('mouseover', mostrarSubmenu);
menu.addEventListener('mouseout', esconderSubmenu);

function mostrarSubmenu(event) {
        submenu.style.display = 'block';
} 

function esconderSubmenu() {
        submenu.style.display = 'none';
} 