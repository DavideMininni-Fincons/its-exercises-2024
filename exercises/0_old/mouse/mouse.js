const ul = document.querySelector('#ul');
const li = document.querySelectorAll('li');
ul.addEventListener('click', (e) => {
    if (e.target.tagName !== "LI")
        return;

    if (e.ctrlKey || e.metaKey) {
        toggleSelect(e.target);
    } else {
        singleSelect(e.target);
    }
});

// prevent unneeded selection of list elements on clicks
ul.addEventListener('mousedown', () => {
    return false;
});

li.forEach((listitem) => {
    listitem.addEventListener('mouseenter', (e) => {
        if (!e.target.classList.contains('selected')) {
            e.target.classList.add('enter');
        }
    });
    listitem.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('enter');
    });
})
function toggleSelect(li) {
    li.classList.toggle('selected');
}

function singleSelect(li) {
    let selected = ul.querySelectorAll('.selected');
    for(let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.remove('enter');
    li.classList.add('selected');
}
