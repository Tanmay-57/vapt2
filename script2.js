document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        
        // Redirect to index2.html
        window.location.href = 'index2.html';
    });
});
