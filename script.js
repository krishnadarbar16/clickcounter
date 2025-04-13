const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');
const themeToggleBtn = document.getElementById('theme-toggle');

let count = 0;

function updateDisplay() {
  counterDisplay.textContent = count;
  counterDisplay.classList.remove('bump');
  void counterDisplay.offsetWidth; // trigger reflow
  counterDisplay.classList.add('bump');
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});