// ═══════════════════════════════════════
// PINNACLE AI SOLUTIONS — Interactions
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    // ─── Navbar scroll ───
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    });

    // ─── Mobile menu ───
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });

    // ─── Scroll reveal ───
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));

    // ─── Typing animation ───
    const codeLines = [
        { num: '01', content: '<span class="comment">// Building your digital presence</span>' },
        { num: '02', content: '<span class="tag">&lt;website&gt;</span>' },
        { num: '03', content: '  <span class="attr">design</span>: <span class="val">"stunning"</span>,' },
        { num: '04', content: '  <span class="attr">seo</span>: <span class="val">"optimized"</span>,' },
        { num: '05', content: '  <span class="attr">chatbot</span>: <span class="val">"intelligent"</span>,' },
        { num: '06', content: '  <span class="attr">conversion</span>: <span class="val">"maximized"</span>' },
        { num: '07', content: '<span class="tag">&lt;/website&gt;</span>' },
        { num: '08', content: '' },
        { num: '09', content: '<span class="comment">// Results that speak for themselves</span>' },
        { num: '10', content: '<span class="tag">deploy</span>(<span class="val">"production"</span>);<span class="typing-cursor"></span>' },
    ];
    const codeContainer = document.getElementById('code-preview');
    if (codeContainer) {
        let html = '';
        codeLines.forEach((line, i) => {
            html += `<div style="opacity:0;animation:fadeInLine 0.4s ${i * 0.15}s forwards">
        <span class="line-num">${line.num}</span>${line.content}
      </div>`;
        });
        codeContainer.innerHTML = html;
    }

    // ─── Counter animation ───
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                let current = 0;
                const step = Math.max(1, Math.floor(target / 40));
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(timer); }
                    el.textContent = current + suffix;
                }, 30);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));

    // ─── Form handling ───
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.innerHTML;
        btn.innerHTML = '✓ Message Sent!';
        btn.style.background = 'linear-gradient(135deg, var(--accent2), #00b894)';
        setTimeout(() => { btn.innerHTML = original; btn.style.background = ''; }, 3000);
        form.reset();
    });

    // Add fadeInLine keyframe
    const style = document.createElement('style');
    style.textContent = '@keyframes fadeInLine { from { opacity:0; transform:translateX(-8px); } to { opacity:1; transform:translateX(0); } }';
    document.head.appendChild(style);
});
