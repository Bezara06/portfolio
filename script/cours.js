

window.addEventListener('scroll', function () {
    const scrollTop = window.pageY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
        document.querySelector('.footer').style.display = 'block';
    } else {
        document.querySelector('.footer').style.display = 'none';
    }
});
