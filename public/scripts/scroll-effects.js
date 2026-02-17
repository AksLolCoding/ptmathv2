const revealNodes = document.querySelectorAll('.reveal');
const parallaxNodes = document.querySelectorAll('[data-parallax]');

if (revealNodes.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
    });

    revealNodes.forEach((node) => revealObserver.observe(node));
}

if (parallaxNodes.length) {
    let ticking = false;

    const updateParallax = () => {
        const viewportHeight = window.innerHeight;

        parallaxNodes.forEach((node) => {
            const rect = node.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const progress = (center - viewportHeight / 2) / viewportHeight;
            const offset = Math.max(-18, Math.min(18, progress * -26));
            node.style.setProperty('--parallax-offset', `${offset.toFixed(2)}px`);
        });

        ticking = false;
    };

    const requestTick = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
    requestTick();
}
