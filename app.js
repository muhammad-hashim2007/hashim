document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === '' || password === '') {
    document.getElementById('error-message').textContent = 'Both fields are required!';
  } else {
    document.getElementById('error-message').textContent = '';
    alert('Login Successful!');
  }
});
