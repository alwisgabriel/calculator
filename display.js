class Display {
    constructor(previousValueText, currentValueText) {
        this.previousValueText = previousValueText;
        this.currentValueText = currentValueText;
        this.calculator = new Calculator();
        this.currentValue = '';
        this.previousValue = '';
        this.operationType = undefined;
        this.operations = {
            add: '+',
            subtract: '-',
            multiply: 'x',
            divide: '÷',
        };
    }

    clear() {
        this.currentValue = '';
        this.previousValue = '';
        this.operationType = undefined;
        this.updateDisplay();
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.updateDisplay();
    }

    addNumber(number) {
        if (number === '.' && this.currentValue.includes('.')) return;
        this.currentValue += number.toString();
        this.updateDisplay();
    }

    compute(type) {
        if (this.operationType !== 'equal') this.calculate();
        this.operationType = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.updateDisplay();
    }

    calculate() {
        const prev = parseFloat(this.previousValue);
        const curr = parseFloat(this.currentValue);

        if (isNaN(prev) || isNaN(curr)) return;

        this.currentValue = this.calculator[this.operationType](prev, curr);
    }

    updateDisplay() {
        this.currentValueText.textContent = this.currentValue;
        this.previousValueText.textContent = `${this.previousValue} ${this.operations[this.operationType] || ''}`;
    }
}
