const typedEl = document.querySelector('.typing-text span');
const words = ['BSIT Student', 'Late Night Coder', 'Gamer', 'Future Developer', 'Chill Student'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

if (typedEl) {
    function type() {
        const current = words[wordIndex];

        if (isDeleting) {
            typedEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 60 : 100;

        if (!isDeleting && charIndex === current.length) {
            speed = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    type();
}

const hamburger = document.getElementById('hamburger');
const menuIcon = document.getElementById('menuIcon');
const navbar = document.getElementById('navbar');

if (hamburger && navbar && menuIcon) {
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');

        if (navbar.classList.contains('open')) {
            menuIcon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            menuIcon.classList.replace('fa-xmark', 'fa-bars');
        }
    });
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (navbar && menuIcon) {
            navbar.classList.remove('open');
            menuIcon.classList.replace('fa-xmark', 'fa-bars');
        }
    });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
    if (backTop) {
        if (window.scrollY > 400) {
            backTop.classList.add('show');
        } else {
            backTop.classList.remove('show');
        }
    }
});

const revealElements = document.querySelectorAll(
    '.heading, .about-img, .about-content, .skills-box, .timeline-item, .portfolio-card, .contact-left, .contact-form, .portfolio-sub'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealElements.forEach(el => revealObserver.observe(el));

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(fill => {
                const width = fill.getAttribute('data-width');
                fill.style.width = width + '%';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-box').forEach(box => skillObserver.observe(box));

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');
const btn = contactForm?.querySelector('button[type="submit"]');
const spinner = document.getElementById('spinner');
const btnText = document.querySelector('.btn-text');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        btn.disabled = true;
        btnText.textContent = 'Sending...';
        spinner.style.display = 'inline-block';
        
        try {
            const formData = new FormData(contactForm);
            const name = formData.get('user_name');
            const email = formData.get('user_email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            if (!name || !email || !message) {
                throw new Error('Missing required fields');
            }
            
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            contactForm.reset();
            formSuccess.style.display = 'block';
            formError.style.display = 'none';
            console.log('📧 Form Data:', {name, email, subject, message});
            
        } catch (error) {
            console.error('Form error:', error);
            formError.style.display = 'block';
            formSuccess.style.display = 'none';
        } finally {
            btn.disabled = false;
            btnText.textContent = 'Send Message';
            spinner.style.display = 'none';
            
            setTimeout(() => {
                formSuccess.style.display = 'none';
                formError.style.display = 'none';
            }, 4000);
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});