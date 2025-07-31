
    // Form validation and submission
    document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    const btn = document.querySelector('.btn-signup');
    const btnText = btn.querySelector('span');

    // Clear previous messages
    hideMessages();

    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
    showError('Please fill in all required fields');
    return;
}

    if (!isValidEmail(email)) {
    showError('Please enter a valid email address');
    return;
}

    if (phone && !isValidPhone(phone)) {
    showError('Please enter a valid phone number');
    return;
}

    if (password.length < 8) {
    showError('Password must be at least 8 characters long');
    return;
}

    if (password !== confirmPassword) {
    showError('Passwords do not match');
    return;
}

    if (!agreeTerms) {
    showError('Please agree to the Terms of Service and Privacy Policy');
    return;
}

    // Add loading state
    btn.classList.add('loading');
    btnText.textContent = 'Creating Account...';

    // Simulate API call
    setTimeout(() => {
    btn.classList.remove('loading');
    btnText.textContent = 'Create Account';

    showSuccess('Account created successfully! Welcome aboard!');
    setTimeout(() => {
    alert(`Welcome ${firstName}! Your account has been created successfully.`);
}, 1500);
}, 3000);
});

    // Email validation
    function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

    // Phone validation (basic)
    function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

    // Password strength checker
    const passwordInput = document.getElementById('password');
    const strengthIndicator = document.getElementById('passwordStrength');
    const strengthFill = document.querySelector('.strength-fill');
    const strengthText = document.getElementById('strengthText');

    passwordInput.addEventListener('input', function() {
    const password = this.value;

    if (password.length === 0) {
    strengthIndicator.style.display = 'none';
    return;
}

    strengthIndicator.style.display = 'block';

    let strength = 0;
    let strengthLabel = '';

    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;

    // Character variety checks
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Set strength class and text
    strengthIndicator.className = 'password-strength';

    if (strength <= 2) {
    strengthIndicator.classList.add('strength-weak');
    strengthLabel = 'Weak';
} else if (strength <= 3) {
    strengthIndicator.classList.add('strength-fair');
    strengthLabel = 'Fair';
} else if (strength <= 4) {
    strengthIndicator.classList.add('strength-good');
    strengthLabel = 'Good';
} else {
    strengthIndicator.classList.add('strength-strong');
    strengthLabel = 'Strong';
}

    strengthText.textContent = strengthLabel;
});

    // Password visibility toggles
    function setupPasswordToggle(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);

    toggle.addEventListener('click', function() {
    if (input.type === 'password') {
    input.type = 'text';
    this.classList.remove('fa-eye');
    this.classList.add('fa-eye-slash');
} else {
    input.type = 'password';
    this.classList.remove('fa-eye-slash');
    this.classList.add('fa-eye');
}
});
}

    setupPasswordToggle('password', 'passwordToggle');
    setupPasswordToggle('confirmPassword', 'confirmPasswordToggle');

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

    // Social signup handlers
    document.getElementById('googleSignup').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Google sign-up integration would go here');
});

    document.getElementById('facebookSignup').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Facebook sign-up integration would go here');
});

    document.getElementById('twitterSignup').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Twitter sign-up integration would go here');
});

    // Terms and privacy links
    document.getElementById('termsLink').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Terms of Service would open here');
});

    document.getElementById('privacyLink').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Privacy Policy would open here');
});

    // Login link handler
    document.getElementById('loginLink').addEventListener('click', function(e) {
    e.preventDefault();

    // Add a smooth transition effect
    const card = document.querySelector('.signup-card');
    card.style.transform = 'translateX(20px)';
    card.style.opacity = '0.8';

    setTimeout(() => {
    card.style.transform = 'translateX(0)';
    card.style.opacity = '1';
    alert('Login page would load here! You could navigate back to the login form.');
}, 200);
});

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
        if (label && label.tagName === 'LABEL') {
            if (this.value) {
                label.style.color = 'rgba(255, 255, 255, 0.9)';
            } else {
                label.style.color = 'rgba(255, 255, 255, 0.7)';
            }
        }
    });
});

    // Real-time password confirmation
    document.getElementById('confirmPassword').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;

    if (confirmPassword && password !== confirmPassword) {
    this.style.borderColor = 'rgba(255, 107, 107, 0.5)';
} else {
    this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
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
