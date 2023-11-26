let c1 = 'lightblue';
let c2 = 'lightgreen';
let isC1 = true;

function toggleColor() {
  const container = document.body;
  container.style.backgroundColor = isC1 ? c1 : c2;
  isC1 = !isC1;
}

document.body.addEventListener('click', toggleColor);
toggleColor();
