function generateFibonacciSequence(n) {
    if (n < 1) return [];
    let fib = [1];
    if (n > 1) fib.push(1);

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

function generateFibonacciSpiral() {
    const numFib = document.getElementById('numFib').value;
    const fibonacciSequence = generateFibonacciSequence(numFib);
    const spiralContainer = document.getElementById('spiralContainer');

    // Clear previous squares
    spiralContainer.innerHTML = '';

    // Constants for the spiral
    const directions = [
        { x: 1, y: 0 },  // Right
        { x: -1, y: 1 },  // Down
        { x: -1, y: -1 }, // Left
        { x: 0, y: -1 }  // Up
    ];
    const xMatrix = [
        { curr: 1, prev: 0 },
        { curr: 0, prev: 1 },
        { curr: 1, prev: 1 },
        { curr: 0, prev: 0 },
    ];
    const yMatrix = [
        { curr: 0, prev: 0 },
        { curr: 1, prev: 0 },
        { curr: 0, prev: 1 },
        { curr: 1, prev: 1 },
    ];

    let currentIndex = 0;
    let x = spiralContainer.clientWidth / 2;
    let y = spiralContainer.clientHeight / 2;

    let offZero = 5;
    // let prevX = 0, prevY = 0;

    fibonacciSequence.forEach((num, index) => {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.width = `${num*offZero}px`;
        square.style.height = `${num*offZero}px`;
        square.textContent = num.toString();
        square.id = index.toString();

        // Set position
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;

        // Append square to container
        spiralContainer.appendChild(square);

        const signModifier = directions[currentIndex];
        const xModifier = xMatrix[currentIndex];
        const yModifier = yMatrix[currentIndex];

        x += signModifier.x * offZero * ((fibonacciSequence[index] * xModifier.curr) + ((isNaN(fibonacciSequence[index - 1]) ? 0 : fibonacciSequence[index - 1]) * xModifier.prev));
        y += signModifier.y * offZero * ((fibonacciSequence[index] * yModifier.curr) + ((isNaN(fibonacciSequence[index - 1]) ? 0 : fibonacciSequence[index - 1]) * yModifier.prev));

        // if (currentDirection === 0) {
        //     x += fibonacciSequence[index] * offZero;
        //     prevX = fibonacciSequence[index] * offZero;
        // } else if (currentDirection === 1) {
        //     x -= prevX;
        //     y += fibonacciSequence[index] * offZero;
        //     prevY = fibonacciSequence[index] * offZero;
        // } else if (currentDirection === 2) {
        //     x -= fibonacciSequence[index] * offZero + fibonacciSequence[index - 1] * offZero;
        //     y -= prevY;
        // } else if (currentDirection === 3) {
        //     y -= fibonacciSequence[index] * offZero + fibonacciSequence[index - 1] * offZero;
        // }
        currentIndex = (currentIndex + 1) % 4;
    });
}
