document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.info-section');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Loại bỏ quan sát sau khi đã xuất hiện
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
