function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for your inquiry! Our team will contact you within 24 hours to discuss your security requirements.');
    e.target.reset();
}

// Smooth scrolling functionality
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