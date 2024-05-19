const form = document.forms.namedItem('calculation');
const ral = form.ral;
const months = form.months;

function calc() {
    document.getElementById('result').innerText = `Net (month): ${((ral.value / months.value) * 0.75).toFixed(0)}`;
}

ral.oninput = calc;
months.onchange = calc;
calc();
