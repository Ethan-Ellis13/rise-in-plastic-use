/* Search Bar */
const input = document.getElementsByTagName('input')[0];

const colorChange = (e) => {
  const text = e.target.value;
  window.find(text);
}

input.onchange = colorChange;