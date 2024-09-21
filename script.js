// Simple form handling with basic validation and message display
if (window.location.pathname === '/cctv') {
  window.location.href = '/cctv.html';
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.querySelector('.form-status').textContent = '2f 63 63 74 76';
      document.querySelector('.form-status').style.color = 'green';
    } else {
      document.querySelector('.form-status').textContent = 'Please fill in all fields.';
      document.querySelector('.form-status').style.color = 'red';
    }
  
    // Optionally, reset the form
    document.getElementById('contact-form').reset();
  });
  
