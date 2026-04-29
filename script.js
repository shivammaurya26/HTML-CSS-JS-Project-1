document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const messageEl = document.getElementById('message');

    // Clear previous message
    messageEl.className = '';
    messageEl.textContent = '';

    // Validate email domain
    if (!email.endsWith('@uppolice.in')) {
        messageEl.textContent = 'Error: Email must end with @uppolice.in';
        messageEl.className = 'error';
        return;
    }

    // Dummy API call - will fail
    fetch('https://dummy-api-endpoint.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(response => {
            // Even if API fails, show success as requested
            throw new Error('Dummy API failed');
        })
        .catch(error => {
            // Show success message despite API failure
            messageEl.textContent = 'Login successful! Welcome, ' + name;
            messageEl.className = 'success';
            document.getElementById('loginForm').reset();
        });
});