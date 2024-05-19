const dropdownButton = document.querySelector('.dropdown-button');
const dropdownOptions = document.querySelector('.dropdown-options');
const selected = document.querySelector('.selectedElement');
const options = document.querySelectorAll('li');

dropdownButton.addEventListener('click', () => {
    toggleDisplay();
});

dropdownOptions.addEventListener('click', (e) => {
    if (e.target.tagName !== 'LI') {
        return;
    }
    const sel = document.createElement('div');
    sel.innerText = e.target.innerText
    selected.append(sel);
    toggleDisplay();
});

dropdownButton.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const focused = Array.from(options).findIndex(e => e.classList.contains('focused'));
        if (focused === -1 || focused === options.length - 1) {
            options[0].classList.add('focused');
            options[options.length - 1].classList.remove('focused');
        } else {
            options[focused].classList.remove('focused');
            const next = e.key === 'ArrowDown' ? +1 : -1;
            options[focused + next].classList.add('focused');
        }
    }
});

function toggleDisplay() {
    dropdownOptions.classList.toggle('show-panel');
    resetFocused();
}

function resetFocused() {
    Array.from(options).forEach(e => e.classList.remove('focused'));
}
