document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Smooth Scroll Implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenu?.classList.remove('active');
            }
        });
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .why-us-card, .client-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic form validation
            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const message = this.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                showNotification('Veuillez remplir tous les champs', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Veuillez entrer une adresse email valide', 'error');
                return;
            }

            // Here you would typically send the form data to your server
            console.log('Form submitted:', { name, email, message });
            showNotification('Message envoyé avec succès!', 'success');
            this.reset();
        });
    }

    // Helper Functions
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }, 100);
    }

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });

    // Add loading="lazy" to images
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
    // Add hover effect to frame items
    const frameItems = document.querySelectorAll('.frame-item');
    
    frameItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            frameItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.opacity = '0.5';
                }
            });
        });
        
        item.addEventListener('mouseleave', () => {
            frameItems.forEach(otherItem => {
                otherItem.style.opacity = '1';
            });
        });
        
        // Add click animation
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.98)';
            setTimeout(() => {
                item.style.transform = 'translateX(10px)';
            }, 100);
        });
    });
}); 

// Hamburger Menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Toggle menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navWrapper.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navWrapper.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-content') && navWrapper.classList.contains('active')) {
            hamburger.classList.remove('active');
            navWrapper.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});

// Add this to your existing CSS
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .no-scroll {
            overflow: hidden;
        }
    </style>
`);

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navWrapper.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navWrapper.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            contactForm.reset();
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your newsletter subscription logic here
            alert('Merci de vous être inscrit à notre newsletter !');
            newsletterForm.reset();
        });
    }

    // Sticky header
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }

    // Add hover effect to service cards
    const cards = document.querySelectorAll('.service-card, .pack-card, .impact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});