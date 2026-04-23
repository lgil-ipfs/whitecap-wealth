/**
 * Global JavaScript for Whitecap Wealth
 * Handles dynamic loading of header/footer and common UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});

async function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        try {
            const response = await fetch('components/header.html');
            const data = await response.text();
            headerPlaceholder.innerHTML = data;
            initMobileMenu();
            handleScroll();
        } catch (error) {
            console.error('Error loading header:', error);
        }
    }

    if (footerPlaceholder) {
        try {
            const response = await fetch('components/footer.html');
            const data = await response.text();
            footerPlaceholder.innerHTML = data;
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    }
}

function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}

function handleScroll() {
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Add CSS for mobile menu and scroll effect dynamically or ensure it's in global.css
const style = document.createElement('style');
style.textContent = `
    .nav-links.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 90px;
        left: 0;
        width: 100%;
        background: var(--white);
        padding: 2rem;
        box-shadow: var(--shadow);
    }
    .main-header.scrolled {
        background: var(--white);
        height: 70px;
        box-shadow: var(--shadow);
    }
    .main-header.scrolled .nav-wrapper {
        height: 70px;
    }
    .mobile-menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .mobile-menu-toggle.active span:nth-child(2) { opacity: 0; }
    .mobile-menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -6px); }
`;
document.head.appendChild(style);
