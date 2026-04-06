/* ================================================
   PORTFOLIO — JAVASCRIPT
   Scroll effects, nav highlight, skill animations,
   skill filter, mobile menu, contact form
   ================================================ */

/* ---- Year ---- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---- Navbar Scroll Effect ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNav();
}, { passive: true });

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

/* ---- Mobile hamburger ---- */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navMenu.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close on nav link click
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

/* ---- Scroll Reveal ---- */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ---- Skill Level Bar Animation ---- */
const skillLevelFills = document.querySelectorAll('.skill-level-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const level = fill.getAttribute('data-level');
      // Slight delay for visual effect
      setTimeout(() => { fill.style.width = level + '%'; }, 200);
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillLevelFills.forEach(fill => skillObserver.observe(fill));

/* ---- Skills Category Filter ---- */
const catButtons = document.querySelectorAll('.skill-cat-btn');
const skillCards = document.querySelectorAll('.skill-card');

catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    catButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    skillCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const match = category === 'all' || cardCategory === category;

      if (match) {
        card.style.display = '';
        // Re-animate skill bars for filtered cards
        const fill = card.querySelector('.skill-level-fill');
        if (fill) {
          fill.style.width = '0';
          setTimeout(() => {
            fill.style.width = fill.getAttribute('data-level') + '%';
          }, 200);
        }
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ---- Animated Counter for Stats ---- */
function animateCounter(el, target, duration = 1500) {
  const start = 0;
  const step = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current) + '+';
    }
  }, 16);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const countEl = document.getElementById('projects-count');
      if (countEl) {
        // Read the number from the element's text (strips any '+' or non-digit chars)
        const target = parseInt(countEl.textContent.replace(/\D/g, ''), 10) || 0;
        animateCounter(countEl, target);
      }
      statObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroSection = document.getElementById('hero');
if (heroSection) statObserver.observe(heroSection);

/* ---- Smooth scrolling for all hash links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---- Contact Form Handler ---- */
function handleFormSubmit(e) {
  e.preventDefault();

  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit');
  const submitText = document.getElementById('submit-text');
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email-input').value;
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value;

  // Construct mailto link
  const mailtoLink = `mailto:your@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Hi, I'm ${name} (${email}).\n\n${message}`
  )}`;

  // Animate button
  submitText.textContent = 'Opening mail client...';
  submitBtn.style.opacity = '0.7';
  submitBtn.disabled = true;

  setTimeout(() => {
    window.location.href = mailtoLink;
    submitText.textContent = 'Message Sent! 🎉';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

    setTimeout(() => {
      submitText.textContent = 'Send Message 🚀';
      submitBtn.style.opacity = '1';
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      form.reset();
    }, 3000);
  }, 800);
}

/* ---- Parallax subtle effect on hero ---- */
const heroContent = document.querySelector('.hero-content');
const heroImage = document.querySelector('.hero-image-wrap');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    if (heroContent) heroContent.style.transform = `translateY(${scrollY * 0.08}px)`;
    if (heroImage) heroImage.style.transform = `translateY(${scrollY * 0.04}px)`;
  }
}, { passive: true });

/* ---- Cursor glow effect ---- */
const cursorGlow = document.createElement('div');
cursorGlow.id = 'cursor-glow';
Object.assign(cursorGlow.style, {
  position: 'fixed',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
  pointerEvents: 'none',
  zIndex: '9999',
  transform: 'translate(-50%, -50%)',
  transition: 'left 0.1s, top 0.1s',
});
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
}, { passive: true });

/* ---- GitHub Pages note ---- */
console.log('%c Portfolio loaded! 🚀', 'color: #a78bfa; font-size: 16px; font-weight: bold;');
console.log('%c Built with HTML, CSS & Vanilla JavaScript', 'color: #38bdf8; font-size: 12px;');
