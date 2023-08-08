const correctUsername = 'trax'; // Replace with the correct username
const correctPassword = 'traxou'; // Replace with the correct password

document.querySelector('input[type="submit"]').addEventListener('click', function() {
  const usernameInput = document.querySelector('input[type="text"]').value;
  const passwordInput = document.querySelector('input[type="password"]').value;
  const errorMessage = document.createElement('div');
  errorMessage.style.color = 'red';
  errorMessage.style.marginTop = '10px';

  if (usernameInput === correctUsername && passwordInput === correctPassword) {
    window.location.href = 'aftlogin/index.html'; // Replace 'newpage.html' with the path to your new page
  } else {
    errorMessage.textContent = 'Password or Username incorrect';
    document.querySelector('.form').appendChild(errorMessage);
  }
});
