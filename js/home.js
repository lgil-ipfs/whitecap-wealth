/**
 * Home Page specific JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Parallax or scroll animations for hero could go here
    initHeroParallax();
});

function initHeroParallax() {
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / 700);
        }
    });
}
