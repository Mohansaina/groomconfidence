// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll event listener for header styling
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.background = '#fff';
        }
    });
    
    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.problem-item, .step, .benefit, .trust-item').forEach(el => {
        observer.observe(el);
    });
});

// Waitlist form functionality
// Note: Form functionality removed - using direct link to Google Form instead

// Function to show form message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    if(formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Clear message after 5 seconds
        setTimeout(() => {
            if(formMessage) {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }
        }, 5000);
    }
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.getElementById('waitlist-form');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            // Form is handled via direct submission to Google Forms
            showFormMessage('Thank you! You\'ve been added to our mailing list.', 'success');
            
            // Reset form after successful submission
            setTimeout(() => {
                waitlistForm.reset();
            }, 1000);
        });
    }
});