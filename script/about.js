let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    menu.setAttribute('aria-expanded', String(navbar.classList.contains('active')));
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    menu.setAttribute('aria-expanded', 'false');
}

const navs = document.querySelectorAll('.navs')

navs.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
        menu.setAttribute('aria-expanded', 'false');
    });
});
window.onload = function () {
    const scrollTop = window.pageY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
        document.querySelector('.return img').style.display = 'block';
    } else {
        document.querySelector('.return img').style.display = 'none';
    }
};

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

//Animate view all projewct
const viweAllPro = document.querySelector('.view-project');
let counter = 0;
setInterval((e) => {
    if (counter >= 10) {
        counter = 0;
    }
    if (viweAllPro.classList.contains('animate')) {
        viweAllPro.classList.remove('animate')
    } else {
        if (counter === 9) {
            viweAllPro.classList.add('animate')
        }
    }
    counter++;
    // console.log(counter)
}, 1000);

// Add hover effect to nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

// Add active class to current nav link
const currentPath = window.location.pathname;
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// add event to show active nav
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});