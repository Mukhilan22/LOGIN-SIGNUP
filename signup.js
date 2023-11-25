    document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send data to server (in a real application, you'd use AJAX or fetch)
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from the server (e.g., show success message, redirect to login)
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});