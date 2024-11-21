document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer לאנימציות גלילה
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    // הוספת האלמנטים שנרצה לאנמט
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}); 