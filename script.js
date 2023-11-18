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

const texts = [
  'Welcome to Our Website!',
  'Explore Our Services!',
  'Contact Us for More Information!',
];

let textIndex = 0;
const changingText = document.getElementById('changing-text');

function changeText() {
  changingText.textContent = texts[textIndex];
  textIndex = (textIndex + 1) % texts.length;
}

setInterval(changeText, 3000); // Change text every 3 seconds


/*------------favicon----------------*/
document.addEventListener("DOMContentLoaded", function () {
  // Update the title with a loading icon
  document.title = "🔄 Loading Your Page...";
});

// Once the page is fully loaded, remove the loading icon from the title
window.addEventListener("load", function () {
  document.title = "Your Page Title";
});