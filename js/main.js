document.addEventListener('DOMContentLoaded', function() {
    // המבורגר מניו
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // סגירת תפריט בלחיצה על לינק
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Handling
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // איסוף נתוני הטופס
        const formData = {
            name: this.querySelector('input[type="text"]').value,
            phone: this.querySelector('input[type="tel"]').value,
            email: this.querySelector('input[type="email"]').value,
            subject: this.querySelector('select').value,
            message: this.querySelector('textarea').value
        };

        // הצגת הודעת אישור
        showNotification('הטופס נשלח בהצלחה! נחזור אליך בהקדם.', 'success');
        
        // איפוס הטופס
        this.reset();
    });

    // Notification System
    function showNotification(message, type = 'success') {
        // יצירת אלמנט ההודעה
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        // הוספה לדף
        document.body.appendChild(notification);

        // הוספת סטייל להודעה
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px;
            background: ${type === 'success' ? '#4CAF50' : '#f44336'};
            color: white;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.5s ease;
        `;

        // הסרת ההודעה אחרי 3 שניות
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease forwards';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Smooth Scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Add animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}); 