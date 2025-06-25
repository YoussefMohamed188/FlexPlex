document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            this.classList.replace('bxs-lock-alt', 'bxs-lock-open');
        } else {
            passwordInput.type = "password";
            this.classList.replace('bxs-lock-open', 'bxs-lock-alt');
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
            showError('Please enter a valid email address');
            emailInput.focus();
            return;
        }
        
        if (passwordInput.value.length < 6) {
            showError('Password must be at least 6 characters');
            passwordInput.focus();
            return;
        }
        
        loginBtn.disabled = true;
        loginBtn.textContent = 'Logging in...';
        
        setTimeout(() => {

            showSuccess('Login successful! Redirecting...');
            loginBtn.disabled = false;
            loginBtn.textContent = 'Login';
            

        }, 1500);
    });

    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#ff4444';
        errorDiv.style.marginBottom = '15px';
        errorDiv.style.textAlign = 'center';
        
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        loginForm.insertBefore(errorDiv, loginForm.firstChild);
    }

    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.color = '#4CAF50';
        successDiv.style.marginBottom = '15px';
        successDiv.style.textAlign = 'center';
        
        const existingMessage = document.querySelector('.error-message, .success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        loginForm.insertBefore(successDiv, loginForm.firstChild);
    }
    
});

//back to home image
const homeIcon = document.getElementById('back-to-home');
homeIcon.addEventListener('click' , function(){
    window.location.href = "home.html";
});