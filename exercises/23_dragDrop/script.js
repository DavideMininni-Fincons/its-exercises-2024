const draggable = document.getElementById("draggable");
let isDragging = false;
let offsetX, offsetY;

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
