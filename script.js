// ═══════════════════════════════════════
// PINNACLE AI SOLUTIONS — Enhanced JS
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    // ─── Scroll Progress Bar ───
    const scrollBar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const h = document.documentElement;
        const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
        if (scrollBar) scrollBar.style.width = pct + '%';
    });

    // ─── Navbar scroll ───
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

    // ─── Mobile menu ───
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger?.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('active')));

    // ─── Scroll reveal ───
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ─── Typing code animation ───
    const lines = [
        { n: '01', c: '<span class="comment">// Building your digital presence</span>' },
        { n: '02', c: '<span class="tag">&lt;website&gt;</span>' },
        { n: '03', c: '  <span class="attr">design</span>: <span class="val">"stunning"</span>,' },
        { n: '04', c: '  <span class="attr">seo</span>: <span class="val">"optimized"</span>,' },
        { n: '05', c: '  <span class="attr">chatbot</span>: <span class="val">"intelligent"</span>,' },
        { n: '06', c: '  <span class="attr">conversion</span>: <span class="val">"maximized"</span>' },
        { n: '07', c: '<span class="tag">&lt;/website&gt;</span>' },
        { n: '08', c: '' },
        { n: '09', c: '<span class="comment">// Results that speak for themselves</span>' },
        { n: '10', c: '<span class="tag">deploy</span>(<span class="val">"production"</span>);<span class="typing-cursor"></span>' },
    ];
    const cp = document.getElementById('code-preview');
    if (cp) {
        cp.innerHTML = lines.map((l, i) =>
            `<div style="opacity:0;animation:fadeInLine 0.4s ${i * 0.15}s forwards"><span class="line-num">${l.n}</span>${l.c}</div>`
        ).join('');
    }

    // ─── Counter animation ───
    const cObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target, target = +el.dataset.count, suffix = el.dataset.suffix || '';
            let cur = 0; const step = Math.max(1, Math.floor(target / 40));
            const t = setInterval(() => { cur += step; if (cur >= target) { cur = target; clearInterval(t); } el.textContent = cur + suffix; }, 30);
            cObs.unobserve(el);
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(el => cObs.observe(el));

    // ─── Simple Particles ───
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h, particles = [];
        const resize = () => { w = canvas.width = innerWidth; h = canvas.height = innerHeight; };
        resize(); addEventListener('resize', resize);
        for (let i = 0; i < 60; i++) {
            particles.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.5 + 0.5, dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3, o: Math.random() * 0.4 + 0.1 });
        }
        (function draw() {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(124,92,252,${p.o})`; ctx.fill();
            });
            // connect nearby
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(124,92,252,${0.06 * (1 - dist / 120)})`; ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(draw);
        })();
    }

    // ─── Form ───
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.innerHTML = '✓ Message Sent!'; btn.style.background = 'linear-gradient(135deg, var(--accent2), #00b894)';
        setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 3000);
        form.reset();
    });

    // ─── Keyframe injection ───
    const s = document.createElement('style');
    s.textContent = '@keyframes fadeInLine{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}';
    document.head.appendChild(s);
});
