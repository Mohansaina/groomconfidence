// Waitlist form functionality
document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.getElementById('waitlist-form');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('form-message');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email value
            const email = emailInput.value.trim();
            
            // Validate email format
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // In a real implementation, you would send the email to your server here
            // For this demo, we'll just show a success message
            addToWaitlist(email);
        });
    }
    
    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Function to add email to waitlist
    function addToWaitlist(email) {
        // Show loading state
        const submitButton = waitlistForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Processing...';
        submitButton.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            // In a real implementation, you would send the email to your server here
            // For this demo, we'll just show a success message
            showFormMessage('Thank you! You\'ve been added to our early access list.', 'success');
            
            // Reset form
            waitlistForm.reset();
            
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }, 1500);
    }
    
    // Function to show form message
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }
    
    // Smooth scrolling for navigation links
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