function getRandomHexColor() {
  const hC = '0123456789ABCDEF';
  let hc = '#';
  for (let i = 0; i < 6; i++) {
    hc += hC[Math.floor(Math.random() * 16)];
  }
  return hc;
}

function setRandomBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

setInterval(setRandomBackgroundColor, 3000);
setRandomBackgroundColor();
