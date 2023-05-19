const image = document.getElementById('my-image');

document.addEventListener('click', (event) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;
  image.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});