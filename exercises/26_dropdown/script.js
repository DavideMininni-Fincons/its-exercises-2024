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
    selectElement(e);
});

dropdownButton.addEventListener('keyup', (e) => {
    const focused = Array.from(options).findIndex(e => e.classList.contains('focused'));
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (focused === -1) {
            options[0].classList.add('focused');
            options[options.length - 1].classList.remove('focused');
        } else {
            options[focused].classList.remove('focused');
            let next;
            if (e.key === 'ArrowDown') {
                next = focused === options.length - 1 ? 0 : focused + 1;
            } else {
                next = focused === 0 ? options.length - 1 : focused - 1;
            }
            options[next].classList.add('focused');
        }
    }
});

function selectElement(e) {
    const sel = document.createElement('div');
    sel.innerText = e.target.innerText
    selected.append(sel);
    toggleDisplay();
}

function toggleDisplay() {
    dropdownOptions.classList.toggle('show-panel');
    resetFocused();
}

function resetFocused() {
    Array.from(options).forEach(e => e.classList.remove('focused'));
}
