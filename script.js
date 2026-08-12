/* ═══════════════════════════════════════════════════════
   Dave B. Lausa Portfolio — script.js
   3D Interactions · Typed Effect · Scroll Animations
═══════════════════════════════════════════════════════ */

'use strict';

// ── DOM Ready ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTheme();
  initNav();
  initTyped();
  initHeroTilt();
  initProjectsCarousel();
  initProjectTilt();
  initScrollReveal();
  initSkillBars();
  initContactForm();
  initParallax();
  initAvatarFallback();
  initCursorGlow();
  initScrollProgress();
  initBackToTop();
  initProjectShots();
  initLightbox();
  initProjectModal();
});

// ─────────────────────────────────────────────────────
// LOADER
// ─────────────────────────────────────────────────────
function initLoader() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const icons = [
    { name: 'Flutter', x: -140, y: 10,
      svg: '<svg viewBox="0 0 128 128"><path fill="#3FB6D3" d="M12.3 64.2L76.3 0h39.4L32.1 83.6z"/><path fill="#27AACD" d="M76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/><path fill="#19599A" d="M81.6 93.9l-20-20-19.4 19.6 19.4 34.5z"/><path fill="#1CB8D3" d="M42.2 93.5l19.4 19.6 20-19.2-19.4-19.6z"/></svg>' },
    { name: 'SQLite', x: -70, y: -15,
      svg: '<svg viewBox="0 0 24 24" fill="#5CC9F5"><path d="M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521Z"/></svg>' },
    { name: 'JavaScript', x: 0, y: -25,
      svg: '<svg viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>' },
    { name: 'Python', x: 70, y: -15,
      svg: '<svg viewBox="0 0 128 128"><path fill="#3572A5" d="M49.33 62h29.17C86.65 62 93 55.82 93 47.85V27.3C93 19.58 86.32 13 76.99 11.76c-3.4-.47-6.96-.76-10.99-.76-4.03 0-7.47.29-10.96.76C45.71 13 35 19.02 35 27.3v13h29v4H23.49C15.23 44.3 7 51.3 7 64.03c0 12.74 7.5 19.7 16.49 19.7H35v-15c0-8.35 6.49-15.73 14.33-16.73zM64 18.5c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"/><path fill="#FFD43B" d="M78.67 66H49.5C41.35 66 35 72.18 35 80.15v20.55C35 108.42 41.68 115 50.99 116.24c3.4.47 6.96.76 10.99.76 4.03 0 7.47-.29 10.96-.76C82.29 115 93 108.98 93 100.7V87.7H64v-4h29.49C101.77 83.7 121 76.7 121 63.97c0-12.74-7.5-19.7-16.49-19.7H93v15c0 8.35-6.49 15.73-14.33 16.73zM64 109.5c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>' },
    { name: 'Kotlin', x: 140, y: 10,
      svg: '<svg viewBox="0 0 128 128"><linearGradient id="lkg1" x1="6.2%" y1="93.8%" x2="93.8%" y2="6.2%"><stop offset="0" stop-color="#0095D5"/><stop offset=".3" stop-color="#238AD9"/><stop offset=".62" stop-color="#557BDE"/><stop offset=".88" stop-color="#7472E2"/><stop offset="1" stop-color="#806EE3"/></linearGradient><path fill="url(#lkg1)" d="M0 128L64 64 128 128z"/><linearGradient id="lkg2" x1="3.3%" y1="96.7%" x2="75.7%" y2="27.5%"><stop offset="0" stop-color="#0095D5"/><stop offset=".3" stop-color="#238AD9"/><stop offset=".62" stop-color="#557BDE"/><stop offset=".88" stop-color="#7472E2"/><stop offset="1" stop-color="#806EE3"/></linearGradient><path fill="url(#lkg2)" d="M0 0L64 60 128 0z"/><linearGradient id="lkg3" x1="49.5%" y1="50.5%" x2="99.8%" y2="0.2%"><stop offset="0" stop-color="#0095D5"/><stop offset=".42" stop-color="#3C83DC"/><stop offset=".88" stop-color="#7472E2"/><stop offset="1" stop-color="#806EE3"/></linearGradient><path fill="url(#lkg3)" d="M64 60L0 128h128z"/></svg>' },
  ];

  const iconsHTML = icons.map((ic, i) => `
    <div class="intro-icon-wrap" style="--ix:${ic.x}px; --iy:${ic.y}px; --delay:${600 + i * 260}ms" title="${ic.name}">
      ${ic.svg}
    </div>`).join('');

  // Skip the full theatrical intro on repeat visits within the same session
  let alreadyPlayed = false;
  try { alreadyPlayed = sessionStorage.getItem('introPlayed') === '1'; } catch (e) {}

  const skip = alreadyPlayed && !reduced;

  const loader = document.createElement('div');
  loader.id = 'loader';
  loader.className = [reduced && 'intro-reduced', skip && 'intro-skip'].filter(Boolean).join(' ');
  loader.innerHTML = `
    <div class="intro-content">
      <div class="intro-glow"></div>
      <div class="intro-ring"></div>
      <div class="intro-icons">${iconsHTML}</div>
      <div class="intro-name"><span class="intro-name-text">Dave B. Lausa</span></div>
    </div>
  `;
  document.body.prepend(loader);

  try { sessionStorage.setItem('introPlayed', '1'); } catch (e) {}

  const exitAt = (reduced || skip) ? 50 : 4500;
  const removeAfter = (reduced || skip) ? 50 : 450;

  setTimeout(() => {
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), removeAfter);
  }, exitAt);
}

// ─────────────────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────────────────
function initTheme() {
  const btn  = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    localStorage.setItem('portfolio-theme', t);
    btn.innerHTML = t === 'dark'
      ? '<i class="bi bi-sun-fill"></i>'
      : '<i class="bi bi-moon-stars-fill"></i>';
  }
}

// ─────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────
function initNav() {
  const nav   = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scrolled class
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);

    // Active link highlight
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === `#${current}`) l.classList.add('active');
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Smooth close mobile menu on link click
  links.forEach(l => {
    l.addEventListener('click', () => {
      const menu = document.getElementById('navMenu');
      if (menu.classList.contains('show')) {
        const toggler = document.querySelector('.navbar-toggler');
        toggler.click();
      }
    });
  });
}

// ─────────────────────────────────────────────────────
// TYPED TEXT EFFECT
// ─────────────────────────────────────────────────────
function initTyped() {
  const el    = document.getElementById('typed');
  if (!el) return;

  const lines = [
    'CS Student & Developer',
    'Mobile App Builder',
    'Web Developer',
    'Problem Solver',
    'Open Source Enthusiast',
  ];

  let li = 0, ci = 0, deleting = false;

  const tick = () => {
    const full = lines[li];
    el.textContent = deleting ? full.slice(0, ci--) : full.slice(0, ci++);

    let delay = deleting ? 50 : 90;
    if (!deleting && ci > full.length)        { delay = 1800; deleting = true; }
    else if (deleting && ci < 0)               { deleting = false; li = (li + 1) % lines.length; ci = 0; delay = 300; }

    setTimeout(tick, delay);
  };
  tick();
}

// ─────────────────────────────────────────────────────
// HERO CARD — 3D TILT ON MOUSE MOVE
// ─────────────────────────────────────────────────────
function initHeroTilt() {
  const wrap = document.getElementById('heroCard');
  const card = wrap?.querySelector('.hero-card');
  if (!wrap || !card) return;

  const MAX = 18;

  wrap.addEventListener('mousemove', e => {
    const r    = wrap.getBoundingClientRect();
    const x    = (e.clientX - r.left) / r.width  - .5;
    const y    = (e.clientY - r.top)  / r.height - .5;
    const rotX = -y * MAX;
    const rotY =  x * MAX;

    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`;
    card.style.boxShadow = `${-rotY * 1.5}px ${rotX * 1.5}px 50px rgba(0,0,0,.5), 0 0 60px rgba(0,212,255,.15)`;
  });

  wrap.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
}

// ─────────────────────────────────────────────────────
// PROJECTS — horizontal auto-scrolling loop carousel
// ─────────────────────────────────────────────────────
function initProjectsCarousel() {
  const carousel = document.getElementById('projectsCarousel');
  const track = document.getElementById('projectsTrack');
  if (!carousel || !track) return;

  // Duplicate every card once so the strip can loop seamlessly.
  const originalCards = Array.from(track.children);
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.removeAttribute('data-aos');
    clone.removeAttribute('data-aos-delay');
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  let halfWidth = 0;
  const measure = () => { halfWidth = track.scrollWidth / 2; };
  measure();
  window.addEventListener('resize', measure);

  let paused = false;
  let userInteracting = false;
  const SPEED = 0.5; // px per frame, ~30px/sec at 60fps

  function step() {
    if (!paused && !userInteracting && halfWidth > 0) {
      carousel.scrollLeft += SPEED;
      if (carousel.scrollLeft >= halfWidth) {
        carousel.scrollLeft -= halfWidth;
      }
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  // Pause the auto-loop while the visitor is hovering, touching, or scrolling manually
  carousel.addEventListener('mouseenter', () => paused = true);
  carousel.addEventListener('mouseleave', () => paused = false);
  carousel.addEventListener('touchstart', () => paused = true, { passive: true });
  carousel.addEventListener('touchend', () => setTimeout(() => paused = false, 1500), { passive: true });

  // Click-and-drag scrolling for desktop users
  let isDown = false, startX = 0, startScroll = 0;
  carousel.addEventListener('mousedown', e => {
    isDown = true;
    userInteracting = true;
    startX = e.pageX;
    startScroll = carousel.scrollLeft;
  });
  window.addEventListener('mouseup', () => {
    isDown = false;
    setTimeout(() => userInteracting = false, 800);
  });
  window.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    carousel.scrollLeft = startScroll - (e.pageX - startX);
  });

  // Keep the loop seamless after any manual scroll (wheel, trackpad, drag)
  carousel.addEventListener('scroll', () => {
    if (halfWidth <= 0) return;
    if (carousel.scrollLeft >= halfWidth) carousel.scrollLeft -= halfWidth;
    else if (carousel.scrollLeft < 0) carousel.scrollLeft += halfWidth;
  });
}

// ─────────────────────────────────────────────────────
// PROJECT CARDS — 3D TILT
// ─────────────────────────────────────────────────────
function initProjectTilt() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    const MAX = 12;

    card.addEventListener('mousemove', e => {
      const r    = card.getBoundingClientRect();
      const x    = (e.clientX - r.left) / r.width  - .5;
      const y    = (e.clientY - r.top)  / r.height - .5;
      const rotX = -y * MAX;
      const rotY =  x * MAX;

      card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;

      // Move shine
      const shine = card.querySelector('.pc-shine');
      if (shine) {
        shine.style.background = `radial-gradient(circle at ${(x + .5) * 100}% ${(y + .5) * 100}%, rgba(255,255,255,.08), transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      const shine = card.querySelector('.pc-shine');
      if (shine) shine.style.background = '';
    });
  });
}

// ─────────────────────────────────────────────────────
// SCROLL REVEAL (custom IntersectionObserver)
// ─────────────────────────────────────────────────────
function initScrollReveal() {
  const items = document.querySelectorAll('[data-aos]');
  if (!items.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const delay = parseInt(en.target.dataset.aosDelay || 0);
        setTimeout(() => en.target.classList.add('aos-animate'), delay);
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  items.forEach(el => obs.observe(el));
}

// ─────────────────────────────────────────────────────
// SKILL BARS ANIMATION
// ─────────────────────────────────────────────────────
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  if (!fills.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const target = en.target.dataset.width || 0;
        en.target.style.width = target + '%';
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(f => obs.observe(f));
}

// ─────────────────────────────────────────────────────
// CONTACT FORM — sends a real email via Formspree
// ─────────────────────────────────────────────────────
// SETUP (2 minutes, one time):
//   1. Go to https://formspree.io and sign up free (no card needed).
//   2. Create a new form, verify it with your own email.
//   3. Copy the endpoint it gives you, e.g. "https://formspree.io/f/xxxxxxxx".
//   4. Paste it below, replacing YOUR_FORM_ID.
// Free tier = 50 submissions/month, delivered straight to your inbox.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

function initContactForm() {
  const btn  = document.getElementById('sendBtn');
  const msg  = document.getElementById('formMessage');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const name    = document.getElementById('cName')?.value.trim();
    const email   = document.getElementById('cEmail')?.value.trim();
    const subject = document.getElementById('cSubject')?.value.trim();
    const message = document.getElementById('cMessage')?.value.trim();

    // Validation
    if (!name || !email || !message) {
      showMsg('error', '⚠ Please fill in your name, email, and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMsg('error', '⚠ Please enter a valid email address.');
      return;
    }

    // No Formspree endpoint set up yet — fall back to opening the visitor's
    // own email client with everything pre-filled, so the form still works.
    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailSubject = encodeURIComponent(subject || `Message from ${name}`);
      window.location.href = `mailto:beloylausa@gmail.com?subject=${mailSubject}&body=${body}`;
      showMsg('success', '✓ Opening your email app to send this message…');
      return;
    }

    const btnText = document.getElementById('btnText');
    btnText.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const fd = new FormData();
      fd.append('name', name);
      fd.append('email', email);
      fd.append('subject', subject || '(no subject)');
      fd.append('message', message);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd
      });

      if (res.ok) {
        showMsg('success', '✓ Message sent! I\'ll get back to you soon.');
        ['cName','cEmail','cSubject','cMessage'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      } else {
        showMsg('error', '⚠ Something went wrong sending your message. Please try again.');
      }
    } catch (err) {
      showMsg('error', '⚠ Network error — please check your connection and try again.');
    } finally {
      btnText.textContent = 'Send Message';
      btn.disabled = false;
    }
  });

  function showMsg(type, text) {
    msg.textContent = text;
    msg.className = `form-msg ${type}`;
    msg.classList.remove('d-none');
    setTimeout(() => msg.classList.add('d-none'), 5000);
  }
}

// ─────────────────────────────────────────────────────
// SUBTLE PARALLAX on hero orbs
// ─────────────────────────────────────────────────────
function initParallax() {
  const orb1 = document.querySelector('.orb-1');
  const orb2 = document.querySelector('.orb-2');
  const orb3 = document.querySelector('.orb-3');

  window.addEventListener('mousemove', e => {
    const cx = (e.clientX / window.innerWidth  - .5) * 2;
    const cy = (e.clientY / window.innerHeight - .5) * 2;

    if (orb1) orb1.style.transform = `translate(${cx * 20}px, ${cy * 14}px) scale(1)`;
    if (orb2) orb2.style.transform = `translate(${-cx * 16}px, ${-cy * 12}px) scale(1)`;
    if (orb3) orb3.style.transform = `translate(${cx * 10}px, ${cy * 18}px) scale(1)`;
  }, { passive: true });
}

// ─────────────────────────────────────────────────────
// AVATAR FALLBACK (if image doesn't load, show initials)
// ─────────────────────────────────────────────────────
function initAvatarFallback() {
  ['avatarImg', 'aboutPhoto'].forEach(id => {
    const img = document.getElementById(id);
    if (!img) return;

    img.onerror = () => {
      // Replace with canvas-generated initials avatar
      const canvas = document.createElement('canvas');
      canvas.width  = 200;
      canvas.height = 200;
      const ctx = canvas.getContext('2d');

      // Gradient bg
      const grad = ctx.createLinearGradient(0, 0, 200, 200);
      grad.addColorStop(0, '#00d4ff');
      grad.addColorStop(1, '#7b2fff');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 200, 200);

      // Initials
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 72px Space Grotesk, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('DL', 100, 106);

      img.src = canvas.toDataURL();
      img.onerror = null;
    };

    // Trigger check
    if (!img.complete || img.naturalHeight === 0) {
      img.dispatchEvent(new Event('error'));
    }
  });
}

// ─────────────────────────────────────────────────────
// SMOOTH ANCHOR SCROLL (offset for fixed nav)
// ─────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 76;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

// ─────────────────────────────────────────────────────
// SKILL CARD — floating label on hover
// ─────────────────────────────────────────────────────
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const skill = card.dataset.skill;
    card.title = skill;
  });
});

// ─────────────────────────────────────────────────────
// COUNTER ANIMATION for hero stats
// ─────────────────────────────────────────────────────
function initCounters() {
  const stats = document.querySelectorAll('.stat-num');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el  = en.target;
      const raw = el.textContent.trim();
      const num = parseInt(raw);
      if (isNaN(num)) return;

      let cur = 0;
      const step = Math.ceil(num / 40);
      const timer = setInterval(() => {
        cur = Math.min(cur + step, num);
        el.textContent = cur + (raw.includes('+') ? '+' : '');
        if (cur >= num) clearInterval(timer);
      }, 30);
      obs.unobserve(el);
    });
  }, { threshold: 1 });

  stats.forEach(s => obs.observe(s));
}
document.addEventListener('DOMContentLoaded', initCounters);

// ─────────────────────────────────────────────────────
// CURSOR SPOTLIGHT GLOW (desktop only)
// ─────────────────────────────────────────────────────
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(hover: none)').matches) return;

  let shown = false;
  window.addEventListener('mousemove', e => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    if (!shown) { glow.classList.add('active'); shown = true; }
  }, { passive: true });

  document.addEventListener('mouseleave', () => glow.classList.remove('active'));
}

// ─────────────────────────────────────────────────────
// SCROLL PROGRESS BAR
// ─────────────────────────────────────────────────────
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

// ─────────────────────────────────────────────────────
// BACK TO TOP BUTTON
// ─────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─────────────────────────────────────────────────────
// PROJECT SCREENSHOT CAROUSEL
// ─────────────────────────────────────────────────────
function initProjectShots() {
  document.querySelectorAll('.pc-shots').forEach(wrap => {
    const shots = Array.from(wrap.querySelectorAll('.pc-shot'));
    if (!shots.length) return;

    const dotsWrap = wrap.querySelector('.pc-shots-dots');
    let i = shots.findIndex(s => s.classList.contains('active'));
    if (i < 0) i = 0;

    let dots = [];
    if (shots.length > 1) {
      shots.forEach((s, idx) => {
        const dot = document.createElement('span');
        if (idx === i) dot.classList.add('active');
        dot.addEventListener('click', e => {
          e.stopPropagation();
          goTo(idx);
        });
        dotsWrap.appendChild(dot);
      });
      dots = Array.from(dotsWrap.children);
    }

    function goTo(idx) {
      shots[i].classList.remove('active');
      if (dots[i]) dots[i].classList.remove('active');
      i = idx;
      shots[i].classList.add('active');
      if (dots[i]) dots[i].classList.add('active');
    }

    let timer = null;
    if (shots.length > 1) {
      timer = setInterval(() => goTo((i + 1) % shots.length), 3200);
      wrap.addEventListener('mouseenter', () => clearInterval(timer));
      wrap.addEventListener('mouseleave', () => {
        timer = setInterval(() => goTo((i + 1) % shots.length), 3200);
      });
    }

    // Touch swipe support (mobile) + drag-vs-tap detection
    let touchStartX = 0, touchStartY = 0, dragged = false;
    wrap.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      dragged = false;
      if (timer) clearInterval(timer);
    }, { passive: true });

    wrap.addEventListener('touchmove', e => {
      if (Math.abs(e.touches[0].clientX - touchStartX) > 10) dragged = true;
    }, { passive: true });

    wrap.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (shots.length > 1 && Math.abs(dx) > 35) {
        if (dx < 0) goTo((i + 1) % shots.length);
        else goTo((i - 1 + shots.length) % shots.length);
      }
      if (shots.length > 1) {
        timer = setInterval(() => goTo((i + 1) % shots.length), 3200);
      }
    }, { passive: true });

    // Click / tap to open full screenshot in lightbox
    wrap.addEventListener('click', () => {
      if (dragged) { dragged = false; return; }
      openLightbox(shots.map(s => s.getAttribute('src')), i);
    });
  });
}

// ─────────────────────────────────────────────────────
// SCREENSHOT LIGHTBOX
// ─────────────────────────────────────────────────────
let __lb = null;
function initLightbox() {
  const box = document.getElementById('lightbox');
  if (!box) return;

  __lb = {
    el: box,
    img: box.querySelector('.lightbox-img'),
    prev: box.querySelector('.lightbox-nav.prev'),
    next: box.querySelector('.lightbox-nav.next'),
    counter: box.querySelector('.lightbox-counter'),
    close: box.querySelector('.lightbox-close'),
    srcs: [],
    idx: 0,
  };

  const render = () => {
    __lb.img.src = __lb.srcs[__lb.idx];
    const multi = __lb.srcs.length > 1;
    __lb.prev.classList.toggle('hidden', !multi);
    __lb.next.classList.toggle('hidden', !multi);
    __lb.counter.classList.toggle('hidden', !multi);
    __lb.counter.textContent = `${__lb.idx + 1} / ${__lb.srcs.length}`;
  };
  __lb.render = render;

  const closeBox = () => box.classList.remove('open');

  __lb.close.addEventListener('click', closeBox);
  box.addEventListener('click', e => { if (e.target === box) closeBox(); });
  __lb.prev.addEventListener('click', () => {
    __lb.idx = (__lb.idx - 1 + __lb.srcs.length) % __lb.srcs.length;
    render();
  });
  __lb.next.addEventListener('click', () => {
    __lb.idx = (__lb.idx + 1) % __lb.srcs.length;
    render();
  });
  document.addEventListener('keydown', e => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') closeBox();
    if (e.key === 'ArrowLeft') __lb.prev.click();
    if (e.key === 'ArrowRight') __lb.next.click();
  });
}

function openLightbox(srcs, startIdx) {
  if (!__lb) return;
  __lb.srcs = srcs;
  __lb.idx = startIdx || 0;
  __lb.render();
  __lb.el.classList.add('open');
}

// ─────────────────────────────────────────────────────
// PROJECT DETAILS MODAL
// ─────────────────────────────────────────────────────
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const iconEl   = modal.querySelector('.pm-icon');
  const titleEl  = modal.querySelector('.pm-title');
  const descEl   = modal.querySelector('.pm-desc');
  const featEl   = modal.querySelector('.pm-features');
  const techEl   = modal.querySelector('.pm-tech');
  const shotsBtn = modal.querySelector('.pm-view-shots');
  const githubEl = modal.querySelector('.pm-github');
  const closeEls = [modal.querySelector('.project-modal-close'), modal.querySelector('.project-modal-backdrop')];

  let currentShots = [];

  const close = () => modal.classList.remove('open');
  closeEls.forEach(el => el && el.addEventListener('click', close));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });

  const openProjectModal = (card) => {
      if (!card) return;

      const title = card.dataset.title || card.querySelector('h3')?.textContent || '';
      const desc  = card.dataset.desc || card.querySelector('p')?.textContent || '';
      const features = (card.dataset.features || '').split('|').filter(Boolean);
      const github = card.dataset.github || '';
      const iconHTML = card.querySelector('.pc-icon i')?.outerHTML || '<i class="bi bi-box-fill"></i>';
      const techSpans = card.querySelectorAll('.pc-tech span');

      titleEl.textContent = title;
      descEl.textContent = desc;
      iconEl.innerHTML = iconHTML;

      featEl.innerHTML = '';
      features.forEach(f => {
        const li = document.createElement('li');
        li.textContent = f;
        featEl.appendChild(li);
      });

      techEl.innerHTML = '';
      techSpans.forEach(s => {
        const span = document.createElement('span');
        span.textContent = s.textContent;
        techEl.appendChild(span);
      });

      currentShots = Array.from(card.querySelectorAll('.pc-shot')).map(s => s.getAttribute('src'));
      shotsBtn.style.display = currentShots.length ? '' : 'none';

      if (github) {
        githubEl.href = github;
        githubEl.classList.remove('disabled');
        githubEl.innerHTML = '<i class="bi bi-github me-1"></i> View on GitHub';
      } else {
        githubEl.href = '#';
        githubEl.classList.add('disabled');
        githubEl.innerHTML = '<i class="bi bi-github me-1"></i> Repo coming soon';
      }

      modal.classList.add('open');
  };

  document.querySelectorAll('.pc-details-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openProjectModal(btn.closest('.project-card'));
    });
  });

  // Whole card is clickable — but not when clicking a link/button inside it
  // (GitHub icon, screenshot expand, carousel dots, etc.)
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('pc-clickable');
    card.addEventListener('click', e => {
      if (e.target.closest('a, button, .pc-shots-dots span')) return;
      openProjectModal(card);
    });
  });

  shotsBtn.addEventListener('click', () => {
    if (currentShots.length) openLightbox(currentShots, 0);
  });
}
