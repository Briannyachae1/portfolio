const movingText = document.querySelector('.moving-text');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  movingText.style.left = mouseX + 'px';
  movingText.style.top = mouseY + 'px';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // ... (your form data handling code) ...

  // Display the notification
  const notification = document.getElementById('submit-notification');
  notification.style.display = 'block';

  // Hide the notification after a few seconds (adjust the timeout as needed)
  setTimeout(function() {
      notification.style.display = 'none';
  }, 3000); // 3000 milliseconds (3 seconds) in this example
});
