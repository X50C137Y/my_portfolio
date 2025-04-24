const toggleButton = document.getElementById('theme-toggle');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}
const projectTitles = document.querySelectorAll('.toggle-project');

projectTitles.forEach(title => {
  title.addEventListener('click', () => {
    const details = title.nextElementSibling;
    if (details.style.display === 'none') {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  });
});
window.addEventListener('DOMContentLoaded', () => {
    const greetingEl = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting = '';
  
    if (hour < 12) {
      greeting = 'Good morning 🤗';
    } else if (hour < 18) {
      greeting = 'Good afternoon 🤓';
    } else {
      greeting = 'Good evening 😎';
    }
  
    greetingEl.textContent = greeting;
  });
  const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function (e) {
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
      return;
    }

    if (!phonePattern.test(phone)) {
      alert('Phone number must be 10 digits.');
      e.preventDefault();
      return;
    }
  });
}
 