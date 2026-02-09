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

const aboutToggle = document.querySelector('.about-toggle');
const aboutMore = document.getElementById('about-more');

if (aboutToggle && aboutMore) {
    aboutToggle.addEventListener('click', () => {
        const isExpanded = aboutToggle.getAttribute('aria-expanded') === 'true';
        aboutToggle.setAttribute('aria-expanded', String(!isExpanded));
        aboutMore.hidden = isExpanded;
        aboutToggle.textContent = isExpanded ? 'Voir Plus' : 'Voir Moins';
    });
}

const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

if (contactForm && window.emailjs) {
    emailjs.init('Kx3LFCRWYr22DLAqH'); //User ID EmailJS

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (contactStatus) {
            contactStatus.textContent = '';
        }

        const submitButton = contactForm.querySelector('input[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.value = 'Envoi...';
        }

        try {
            await emailjs.sendForm('service_9z9z6xm', 'bezara_i11zkby', contactForm);
            if (contactStatus) {
                if (document.querySelector('.form-status').classList.contains('danger')) {
                    document.querySelector('.form-status').classList.remove('danger');
                }
                document.querySelector('.form-status').classList.add('success');
                contactStatus.textContent = 'Message envoye avec succes!';
            }
            contactForm.reset();
        } catch (error) {
            console.error('EmailJS error:', error);
            if (contactStatus) {
                if (document.querySelector('.form-status').classList.contains('success')) {
                    document.querySelector('.form-status').classList.remove('success');
                }
                document.querySelector('.form-status').classList.add('danger');
                contactStatus.textContent = "Echec de l'envoi. Reessayez!";
            }
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.value = 'Envoyer Message';
            }
        }
    });
} else if (contactForm) {
    console.warn('EmailJS SDK not loaded.');
}
