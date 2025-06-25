//back to home image
const homeIcon = document.getElementById('back-to-home');

homeIcon.addEventListener('click' , function(){
    window.location.href = "home.html";
});

document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUp-form');
    const nameInput = document.getElementById('name-input');
    const telInput = document.getElementById('tel-input');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const backToHome = document.getElementById('back-to-home');

    // Phone number validation
    telInput.addEventListener('input', (e) => {
        // Remove any non-numeric characters
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        
        // Limit to 11 digits
        if (e.target.value.length > 11) {
            e.target.value = e.target.value.slice(0, 11);
        }
    });

    // Password validation
    function isPasswordValid(password) {
        // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
        const minLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        return minLength && hasUpperCase && hasLowerCase && hasNumber;
    }

    // Email validation
    function isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Form submission
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        if (!nameInput.value.trim()) {
            Swal.fire({
                text: "Please enter your name",
                icon: "warning",
                confirmButtonColor: '#00b7ffc6'
            });
            return;
        }

        if (telInput.value.length < 11) {
            Swal.fire({
                text: "Please enter a valid phone number (11 digits)",
                icon: "warning",
                confirmButtonColor: '#00b7ffc6'
            });
            return;
        }

        if (!isEmailValid(emailInput.value)) {
            Swal.fire({
                text: "Please enter a valid email address",
                icon: "warning",
                confirmButtonColor: '#00b7ffc6'
            });
            return;
        }

        if (!isPasswordValid(passwordInput.value)) {
            Swal.fire({
                text: "Password must be at least 8 characters long and contain uppercase, lowercase, and numbers",
                icon: "warning",
                confirmButtonColor: '#00b7ffc6'
            });
            return;
        }

        // Create user object
        const user = {
            name: nameInput.value.trim(),
            phone: telInput.value,
            email: emailInput.value.toLowerCase(),
            password: passwordInput.value 
        };

        // Get existing users or initialize empty array
        let users = JSON.parse(localStorage.getItem('users') || '[]');

        // Check if email already exists
        if (users.some(u => u.email === user.email)) {
            Swal.fire({
                text: "This email is already registered",
                icon: "error",
                confirmButtonColor: '#00b7ffc6'
            });
            return;
        }

        // Add new user
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        // Show success message and redirect
        Swal.fire({
            text: "Registration successful!",
            icon: "success",
            confirmButtonColor: '#00b7ffc6'
        }).then(() => {
            window.location.href = 'LoginPage.html';
        });
    });

    // Back to home button
    backToHome.addEventListener('click', () => {
        window.location.href = 'home.html';
    });

});