/* ============================================
   ALTO VOLTAJE — main.js
   Animations: Anime.js + Scroll Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ------------------------------------------
       1. MOBILE MENU TOGGLE
    ------------------------------------------ */
    const menuBtn  = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const icon = menuBtn.querySelector('.material-symbols-outlined');
            icon.textContent = mobileMenu.classList.contains('open') ? 'close' : 'menu';
        });

        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                menuBtn.querySelector('.material-symbols-outlined').textContent = 'menu';
            });
        });
    }

    /* ------------------------------------------
       2. SMOOTH SCROLL + NAV ACTIVE STATE
    ------------------------------------------ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const updateActiveNav = () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const top    = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id     = section.getAttribute('id');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${id}`) {
                    if (scrollY >= top && scrollY < bottom) {
                        link.classList.add('nav-link-active');
                    } else {
                        link.classList.remove('nav-link-active');
                    }
                }
            });
        });
    };
    window.addEventListener('scroll', updateActiveNav, { passive: true });

    /* ------------------------------------------
       3. HERO ENTRANCE ANIMATION (Anime.js)
    ------------------------------------------ */
    anime.timeline({ easing: 'easeOutExpo' })
        // 1. Fade-in imagen de fondo
        .add({
            targets: '#hero-bg',
            opacity: [0, 1],
            duration: 1400,
            easing: 'easeOutQuad',
        })
        // 2. Light sweep dorado
        .add({
            targets: '#hero-sweep',
            opacity: [0, 1, 0],
            translateX: ['-100%', '100%'],
            duration: 1100,
            easing: 'easeInOutQuad',
        }, '-=600')
        // 3. Título
        .add({
            targets: '#hero-title',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 900,
            easing: 'easeOutCubic',
        }, '-=400')
        // 4. CTA
        .add({
            targets: '#hero-cta',
            opacity: [0, 1],
            translateY: [20, 0],
            scale: [0.92, 1],
            duration: 700,
            easing: 'easeOutBack',
        }, '-=300');

    /* ------------------------------------------
       4. HERO PARALLAX (scroll)
    ------------------------------------------ */
    const heroBg = document.getElementById('hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            // Combina con Ken Burns: translateY suave sin romper el origin
            heroBg.style.animationPlayState = 'paused';
            heroBg.style.transform = `scale(1.06) translateY(${scrolled * 0.18}px)`;
        }, { passive: true });
    }

    /* ------------------------------------------
       4b. HERO SPARKS — partículas eléctricas
    ------------------------------------------ */
    const canvas  = document.getElementById('hero-sparks');
    const section = document.getElementById('inicio');
    if (canvas && section) {
        const ctx = canvas.getContext('2d');
        let W, H, particles = [];

        const resize = () => {
            W = canvas.width  = section.offsetWidth;
            H = canvas.height = section.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize, { passive: true });

        const GOLD   = 'rgba(229,160,54,';
        const SILVER = 'rgba(191,200,202,';

        class Spark {
            constructor() { this.reset(); }
            reset() {
                this.x    = Math.random() * W;
                this.y    = Math.random() * H * 0.65; // solo en la mitad superior
                this.vx   = (Math.random() - 0.5) * 0.6;
                this.vy   = -Math.random() * 0.8 - 0.2;
                this.life = Math.random() * 0.6 + 0.2;
                this.fade = Math.random() * 0.015 + 0.008;
                this.size = Math.random() * 1.8 + 0.4;
                this.color= Math.random() > 0.4 ? GOLD : SILVER;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.fade;
                if (this.life <= 0) this.reset();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color + this.life + ')';
                ctx.fill();
            }
        }

        for (let i = 0; i < 55; i++) particles.push(new Spark());

        const loop = () => {
            ctx.clearRect(0, 0, W, H);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(loop);
        };
        // Arranca las partículas después del fade-in de la imagen
        setTimeout(loop, 900);
    }

    /* ------------------------------------------
       5. SCROLL-TRIGGERED STAGGER ANIMATIONS
    ------------------------------------------ */
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el  = entry.target;
            const type = el.dataset.animate;

            if (type === 'stagger-cards') {
                const cards = el.querySelectorAll('.stagger-card');
                anime({
                    targets: cards,
                    opacity: [0, 1],
                    translateY: [35, 0],
                    duration: 700,
                    delay: anime.stagger(120),
                    easing: 'easeOutCubic',
                });
            } else if (type === 'fade-up') {
                anime({
                    targets: el,
                    opacity: [0, 1],
                    translateY: [40, 0],
                    duration: 800,
                    easing: 'easeOutCubic',
                });
            } else if (type === 'fade-left') {
                anime({
                    targets: el,
                    opacity: [0, 1],
                    translateX: [-50, 0],
                    duration: 900,
                    easing: 'easeOutCubic',
                });
            } else if (type === 'fade-right') {
                anime({
                    targets: el,
                    opacity: [0, 1],
                    translateX: [50, 0],
                    duration: 900,
                    easing: 'easeOutCubic',
                });
            }

            observer.unobserve(el);
        });
    };

    const scrollObserver = new IntersectionObserver(animateOnScroll, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
    });

    document.querySelectorAll('[data-animate]').forEach(el => scrollObserver.observe(el));

    /* ------------------------------------------
       6. STATS COUNTER ANIMATION
    ------------------------------------------ */
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('[data-count]').forEach(counter => {
                const target = parseInt(counter.dataset.count, 10);
                anime({
                    targets: counter,
                    innerHTML: [0, target],
                    round: 1,
                    duration: 1400,
                    easing: 'easeOutExpo',
                    update: (anim) => {
                        const val = Math.round(anim.animations[0].currentValue);
                        counter.textContent = val + '+';
                    }
                });
            });
            statsObserver.unobserve(entry.target);
        });
    }, { threshold: 0.5 });

    const statsEl = document.getElementById('stats-block');
    if (statsEl) statsObserver.observe(statsEl);

    /* ------------------------------------------
       7. CONTACT FORM — redirigir a WhatsApp
           Captura datos y abre WhatsApp con mensaje prellenado
    ------------------------------------------ */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                btn.textContent = 'PREPARANDO WHATSAPP…';
                btn.disabled = true;
            }

            // Captura los valores del formulario
            const nombre = (document.getElementById('nombre') || {}).value || '';
            const telefono = (document.getElementById('telefono') || {}).value || '';
            const tipo_evento = (document.getElementById('tipo_evento') || {}).value || '';
            const fecha = (document.getElementById('fecha') || {}).value || '';
            const mensaje = (document.getElementById('mensaje') || {}).value || '';

            // Construye el texto en español
            const textLines = [];
            textLines.push('Hola, quiero contratar a GRUPO ALTO VOLTAJE.');
            if (nombre) textLines.push('Nombre: ' + nombre);
            if (telefono) textLines.push('Teléfono: ' + telefono);
            if (tipo_evento) textLines.push('Tipo de evento: ' + tipo_evento);
            if (fecha) textLines.push('Fecha del evento: ' + fecha);
            if (mensaje) textLines.push('Mensaje: ' + mensaje);

            const fullMessage = textLines.join('\n');

            // Número de WhatsApp (sin + ni espacios)
            const waNumber = '524431638964';
            const waUrl = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(fullMessage);

            // Redirige a WhatsApp (abrir en la misma pestaña para "redirigir")
            window.location.href = waUrl;
        });
    }

    /* ------------------------------------------
       8. VIDEO MODAL LIGHTBOX
    ------------------------------------------ */
    const modal       = document.getElementById('video-modal');
    const modalIframe = document.getElementById('modal-iframe');
    const modalTitle  = document.getElementById('modal-title');
    const modalClose  = document.getElementById('modal-close');
    const modalBg     = document.getElementById('modal-backdrop');
    const modalBox    = document.getElementById('modal-box');

    const openModal = (videoId, title) => {
        // Poner src ANTES de mostrar para que empiece a cargar
        modalIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        if (modalTitle) modalTitle.textContent = title;

        // Mostrar modal
        modal.style.display  = 'flex';
        modal.style.opacity  = '0';
        modalBox.style.transform = 'scale(0.88)';
        modalBox.style.opacity   = '0';
        document.body.style.overflow = 'hidden';

        // Forzar reflow y luego animar con CSS transition
        modal.offsetHeight;
        modal.style.transition    = 'opacity 0.3s ease';
        modalBox.style.transition = 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)';
        modal.style.opacity       = '1';
        modalBox.style.transform  = 'scale(1)';
        modalBox.style.opacity    = '1';
    };

    const closeModal = () => {
        modal.style.opacity      = '0';
        modalBox.style.transform = 'scale(0.92)';
        modalBox.style.opacity   = '0';
        setTimeout(() => {
            modal.style.display  = 'none';
            modal.style.transition    = '';
            modalBox.style.transition = '';
            modalIframe.src = '';           // detiene el video
            document.body.style.overflow = '';
        }, 300);
    };

    document.querySelectorAll('.video-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            openModal(thumb.dataset.video, thumb.dataset.title);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBg)    modalBg.addEventListener('click', (e) => {
        if (e.target === modalBg) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
    });

    /* ------------------------------------------
       8b. NAVBAR SCROLL SHADOW
    ------------------------------------------ */
    const nav = document.getElementById('main-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('shadow-2xl', window.scrollY > 40);
        }, { passive: true });
    }

});
