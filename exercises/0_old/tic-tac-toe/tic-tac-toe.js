const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let player = 'x';
let winner = false;

const clickHandler = (e) => {
    if (!e.target.textContent) {
        e.target.textContent = player;
        e.target.dataset.player = player;
    }
    winner = win.some((e) => {
        return e.every(index => document.querySelector(`[data-index="${index}"]`).dataset.player === 'x') || e.every(index => document.querySelector(`[data-index="${index}"]`).dataset.player === 'o');
    });
    if (winner) {
        document.getElementById('winner').textContent = `${player} win`;
        Array.from(document.querySelectorAll('.square')).forEach((e) => {
            e.removeEventListener('click', clickHandler, {once: true});
        });
    } else {
        player = player === 'x' ? 'o' : 'x';
    }
}

Array.from(document.querySelectorAll('.square')).forEach((e) => {
    e.addEventListener('click', clickHandler, {once: true});
});
