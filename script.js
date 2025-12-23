function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
    showTime();
}, 1000);

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !expanded);
            mainNav.classList.toggle('active');
        });
        
        // Optional: Close menu when clicking on a link (for mobile)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 1023) {
                    mainNav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', false);
                }
            });
        });
    }
});
