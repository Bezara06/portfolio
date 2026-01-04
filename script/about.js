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

const navs = document.querySelectorAll('.navs')

window.addEventListener('scroll', function () {
    const scrollTop = window.pageY || document.documentElement.scrollTop;
    const active = window.pageYOffset;
    // console.log(active)
    if (scrollTop > 100) {
        document.querySelector('.return img').style.display = 'block';
    } else {
        document.querySelector('.return img').style.display = 'none';
    }

    if (active >= 600 && active < 1200) {
        navs[0].classList.remove("active")
        navs[1].classList.toggle("active")
        navs[2].classList.remove("active")
        navs[3].classList.remove("active")
        navs[4].classList.remove("active")
        navs[5].classList.remove("active")

    } else if (active >= 1200 && active < 1800) {
        navs[0].classList.remove("active")
        navs[1].classList.remove("active")
        navs[2].classList.toggle("active")
        navs[3].classList.remove("active")
        navs[4].classList.remove("active")
        navs[5].classList.remove("active")
    } else if (active >= 1800 && active < 2400) {
        navs[0].classList.remove("active")
        navs[1].classList.remove("active")
        navs[2].classList.remove("active")
        navs[3].classList.toggle("active")
        navs[4].classList.remove("active")
        navs[5].classList.remove("active")
    } else if (active >= 2400 && active < 3000) {
        navs[0].classList.remove("active")
        navs[1].classList.remove("active")
        navs[2].classList.remove("active")
        navs[3].classList.remove("active")
        navs[4].classList.toggle("active")
        navs[5].classList.remove("active")
    } else if (active >= 3000 && active < 3600) {
        navs[0].classList.remove("active")
        navs[1].classList.remove("active")
        navs[2].classList.remove("active")
        navs[3].classList.remove("active")
        navs[4].classList.remove("active")
        navs[5].classList.toggle("active")
    } else if (active >= 0 && active < 600) {
        navs[0].classList.toggle("active")
        navs[1].classList.remove("active")
        navs[2].classList.remove("active")
        navs[3].classList.remove("active")
        navs[4].classList.remove("active")
        navs[5].classList.remove("active")
    }
});
document.getElementById("year").textContent = new Date().getFullYear();