let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

window.addEventListener('scroll', function () {
    const scrollTop = window.pageY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
        document.querySelector('.return img').style.display = 'block';
    } else {
        document.querySelector('.return img').style.display = 'none';
    }
});