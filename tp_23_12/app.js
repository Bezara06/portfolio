let menu = document.querySelector(".responsive_menu");
const navbar = document.querySelector(".menu");


// menus.addEventListener('click', () => {
//     menu.style.display = 'block';
//     document.body.style.filter = ': blur(1px);';
//     menus.style.display = 'none';
// });


menu.onclick = () => {
    menu.classList.toggle('menu');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('menu');
    navbar.classList.remove('active');
}

const bonjour = () => {
    console.log('Bonjour');
}