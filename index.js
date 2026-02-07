const previousValueText = document.getElementById('previous-value');
const currentValueText = document.getElementById('current-value');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');

const display = new Display(previousValueText, currentValueText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.textContent));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value));
});

clearButton.addEventListener('click', () => display.clear());
deleteButton.addEventListener('click', () => display.delete());
