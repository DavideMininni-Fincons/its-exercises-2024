const draggable = document.getElementById("draggable");
let isDragging = false;
let offsetX, offsetY;
const moveDistance = 50;
let rotationAngle = 0;

draggable.addEventListener("mousedown", function(event) {
    isDragging = true;
    offsetX = event.clientX - draggable.offsetLeft;
    offsetY = event.clientY - draggable.offsetTop;
    draggable.style.cursor = "grabbing";
});

document.addEventListener("mousemove", function(event) {
    if (isDragging) {
        draggable.style.left = event.clientX - offsetX + "px";
        draggable.style.top = event.clientY - offsetY + "px";
    }
});

document.addEventListener("mouseup", function() {
    isDragging = false;
    draggable.style.cursor = "grab";
});

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowUp":
            draggable.style.top = draggable.offsetTop - moveDistance + "px";
            break;
        case "ArrowDown":
            draggable.style.top = draggable.offsetTop + moveDistance + "px";
            break;
        case "ArrowLeft":
            draggable.style.left = draggable.offsetLeft - moveDistance + "px";
            break;
        case "ArrowRight":
            draggable.style.left = draggable.offsetLeft + moveDistance + "px";
            break;
        case "Enter":
            rotationAngle += 15;  // Increase rotation angle by 15 degrees
            draggable.style.transform = `rotate(${rotationAngle}deg)`;
            break;
        case "Backspace":
            rotationAngle -= 15;  // Decrease rotation angle by 15 degrees
            draggable.style.transform = `rotate(${rotationAngle}deg)`;
            break;
        case "Escape":
            draggable.classList.toggle('hidden');
            break;
    }
});
