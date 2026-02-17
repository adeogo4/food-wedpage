// // Contact Page JavaScript Functions

// // Theme toggle functionality
// function toggleTheme() {
//     const body = document.body;
//     const themeIcon = document.querySelector('.theme-icon');
//     const themeText = document.querySelector('.theme-text');
    
//     if (body.classList.contains('dark-mode')) {
//         body.classList.remove('dark-mode');
//         body.classList.add('light-mode');
//         themeIcon.textContent = '☀️';
//         themeText.textContent = 'Light';
//         localStorage.setItem('theme', 'light');
//     } else {
//         body.classList.remove('light-mode');
//         body.classList.add('dark-mode');
//         themeIcon.textContent = '🌙';
//         themeText.textContent = 'Dark';
//         localStorage.setItem('theme', 'dark');
//     }
// }

// // Load saved theme or set default
// function loadTheme() {
//     const savedTheme = localStorage.getItem('theme');
//     const body = document.body;
//     const themeIcon = document.querySelector('.theme-icon');
//     const themeText = document.querySelector('.theme-text');
    
//     if (savedTheme === 'dark') {
//         body.classList.add('dark-mode');
//         themeIcon.textContent = '🌙';
//         themeText.textContent = 'Dark';
//     } else {
//         body.classList.add('light-mode');
//         themeIcon.textContent = '☀️';
//         themeText.textContent = 'Light';
//     }
// }

// // Contact form validation (if you add a form later)
// function validateContactForm(formData) {
//     const errors = [];
    
//     if (!formData.name || formData.name.trim().length < 2) {
//         errors.push('Name must be at least 2 characters long');
//     }
    
//     if (!formData.email || !isValidEmail(formData.email)) {
//         errors.push('Please enter a valid email address');
//     }
    
//     if (!formData.message || formData.message.trim().length < 10) {
//         errors.push('Message must be at least 10 characters long');
//     }
    
//     return errors;
// }

// // Email validation helper
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Smooth scroll to contact section
// function scrollToContact() {
//     const contactSection = document.querySelector('.contact-section');
//     if (contactSection) {
//         contactSection.scrollIntoView({ 
//             behavior: 'smooth',
//             block: 'start'
//         });
//     }
// }

// // Initialize page
// document.addEventListener('DOMContentLoaded', function() {
//     loadTheme();
    
//     // Add click handlers for contact cards
//     const contactCards = document.querySelectorAll('.contact-card');
//     contactCards.forEach(card => {
//         card.addEventListener('click', function() {
//             const contactInfo = this.querySelector('.contact-info').textContent;
            
//             // Copy to clipboard functionality
//             if (navigator.clipboard) {
//                 navigator.clipboard.writeText(contactInfo).then(() => {
//                     showNotification('Contact info copied to clipboard!');
//                 });
//             }
//         });
//     });
// });

// // Show notification helper
// function showNotification(message) {
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.textContent = message;
//     notification.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         background: #ff6a00;
//         color: white;
//         padding: 12px 20px;
//         border-radius: 8px;
//         z-index: 10000;
//         font-weight: 500;
//         box-shadow: 0 4px 12px rgba(0,0,0,0.2);
//         transform: translateX(100%);
//         transition: transform 0.3s ease;
//     `;
    
//     document.body.appendChild(notification);
    
//     // Animate in
//     setTimeout(() => {
//         notification.style.transform = 'translateX(0)';
//     }, 100);
    
//     // Remove after 3 seconds
//     setTimeout(() => {
//         notification.style.transform = 'translateX(100%)';
//         setTimeout(() => {
//             document.body.removeChild(notification);
//         }, 300);
//     }, 3000);
// }