const movingText = document.querySelector('.moving-text');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  movingText.style.left = mouseX + 'px';
  movingText.style.top = mouseY + 'px';
});
