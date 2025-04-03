
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }
});
