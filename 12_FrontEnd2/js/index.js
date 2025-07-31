
    // Form validation and submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const btn = document.querySelector('.btn-login');
    const btnText = btn.querySelector('span');

    // Clear previous messages
    hideMessages();

    // Basic validation
    if (!email || !password) {
    showError('Please fill in all fields');
    return;
}

    if (!isValidEmail(email)) {
    showError('Please enter a valid email address');
    return;
}

    // Add loading state
    btn.classList.add('loading');
    btnText.textContent = 'Signing In...';

    // Simulate API call
    setTimeout(() => {
    btn.classList.remove('loading');
    btnText.textContent = 'Sign In';

    // Demo credentials
    if (email === 'demo@example.com' && password === 'demo123') {
    showSuccess('Login successful! Redirecting...');
    setTimeout(() => {
    alert('Welcome! This is a demo login form.');
}, 1500);
} else {
    showError('Invalid email or password. Try demo@example.com / demo123');
}
}, 2000);
});

    // Email validation
    function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

    // Show error message
    function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
    errorDiv.style.display = 'none';
}, 5000);
}

    // Show success message
    function showSuccess(message) {
    const successDiv = document.getElementById('successMessage');
    successDiv.textContent = message;
    successDiv.style.display = 'block';
    setTimeout(() => {
    successDiv.style.display = 'none';
}, 5000);
}

    // Hide all messages
    function hideMessages() {
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
}



    // Add a smooth transition effect
    const card = document.querySelector('.login-card');
    card.style.transform = 'translateX(-20px)';
    card.style.opacity = '0.8';



    // Input focus effects
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
        this.parentElement.style.transition = 'transform 0.3s ease';
    });

    input.addEventListener('blur', function() {
    this.parentElement.style.transform = 'translateY(0)';
});
});

    // Add floating label animation
    inputs.forEach(input => {
    input.addEventListener('input', function() {
        const label = this.nextElementSibling;
        if (this.value) {
            label.style.color = 'rgba(255, 255, 255, 0.9)';
        } else {
            label.style.color = 'rgba(255, 255, 255, 0.7)';
        }
    });
});

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
    document.getElementById('loginForm').dispatchEvent(new Event('submit'));
}
});

    // Add particle effect on click
    document.addEventListener('click', function(e) {
    createParticle(e.clientX, e.clientY);
});

    function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(255, 255, 255, 0.8)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.animation = 'particleFloat 1s ease-out forwards';

    document.body.appendChild(particle);

    setTimeout(() => {
    particle.remove();
}, 1000);
}

    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
    @keyframes particleFloat {
    0% {
        opacity: 1;
        transform: translateY(0) scale(1);
}
    100% {
    opacity: 0;
    transform: translateY(-50px) scale(0);
}
}
    `;
    document.head.appendChild(style);
