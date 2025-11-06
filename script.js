// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const practiceArea = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !practiceArea) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your inquiry! We will contact you within 24 hours.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add scrolled class styles
const style = document.createElement('style');
style.textContent = `
    .header.scrolled {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #fff;
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        padding: 20px;
        gap: 15px;
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
        
        .nav-menu.active {
            display: flex;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.result-item, .practice-card, .attorney-card, .testimonial-card, .feature-item').forEach(el => {
    observer.observe(el);
});

// Add animation styles
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .result-item,
    .practice-card,
    .attorney-card,
    .testimonial-card,
    .feature-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(animationStyle);

// Phone Number Click Tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        // Track phone clicks (you can integrate with analytics here)
        console.log('Phone number clicked:', this.href);
    });
});

// CTA Button Click Tracking
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        // Track CTA clicks (you can integrate with analytics here)
        console.log('CTA button clicked:', this.textContent);
    });
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading animation for form submission
function showLoading(element) {
    const originalContent = element.innerHTML;
    element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    element.disabled = true;
    
    return function hideLoading() {
        element.innerHTML = originalContent;
        element.disabled = false;
    };
}

// Add smooth reveal animation for hero content
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        heroContent.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Add hover effects for practice area cards
document.querySelectorAll('.practice-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click tracking for practice area cards
document.querySelectorAll('.practice-card').forEach(card => {
    card.addEventListener('click', function() {
        const practiceArea = this.querySelector('h3').textContent;
        console.log('Practice area clicked:', practiceArea);
        // You can add analytics tracking here
    });
});

// Add scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: #d4af37;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
addScrollProgress();

// Get Started multi-step flow
document.addEventListener('DOMContentLoaded', function() {
    const caseCards = document.querySelectorAll('.case-card');
    const submitStep = document.querySelector('#submit-step');
    const selectedCaseNameEl = document.querySelector('#selected-case-name');
    const submitInfoBtn = document.querySelector('#submit-info-btn');
    const contactFormSelect = document.querySelector('.contact-form select');

    let selectedCaseValue = '';

    if (caseCards.length) {
        caseCards.forEach(card => {
            card.addEventListener('click', function() {
                caseCards.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                selectedCaseValue = this.getAttribute('data-case-value') || '';
                const readableName = this.querySelector('span')?.textContent || '';
                if (selectedCaseNameEl) selectedCaseNameEl.textContent = readableName;

                // Scroll to submit step
                const headerHeight = document.querySelector('.header').offsetHeight;
                const y = submitStep.offsetTop - headerHeight;
                window.scrollTo({ top: y, behavior: 'smooth' });
            });
        });
    }

    if (submitInfoBtn) {
        submitInfoBtn.addEventListener('click', function() {
            if (!selectedCaseValue) {
                alert('Please select your case type first.');
                return;
            }
            // Prefill contact form select and jump to form
            if (contactFormSelect) {
                contactFormSelect.value = selectedCaseValue;
            }
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const y = contactSection.offsetTop - headerHeight;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    }
});
