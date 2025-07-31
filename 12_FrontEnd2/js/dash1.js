// Sidebar toggle functionality
const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');

navToggle.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('show');
    } else {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    }
});

// Navigation link active state
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});