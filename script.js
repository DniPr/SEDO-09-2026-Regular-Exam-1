// Helper to set box color
const box = document.getElementById('box');

function setBoxColor(color) {
  box.style.backgroundColor = color;
}
// Apply text input color
document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  setBoxColor(color);
});

// Generate a random hex color
const randomHex = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  return '#' + randomNumber.toString(16).padStart(6, '0');
};
// Apply random color on button click
document.getElementById('random-btn').addEventListener('click', function() {
  var color = randomHex();
  setBoxColor(color);
});
// Improve homepage initialization