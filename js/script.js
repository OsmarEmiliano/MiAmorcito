const cube = document.getElementById('cube');
let startX, startY, currentX, currentY, isDragging = false;
let rotationX = 0;
let rotationY = 0;

function onMouseMove(event) {
    if (!isDragging) return;
    currentX = event.clientX;
    currentY = event.clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;

    rotationX += deltaY * 0.2;
    rotationY += deltaX * 0.2;

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    startX = currentX;
    startY = currentY;
}

function onMouseDown(event) {
    startX = event.clientX;
    startY = event.clientY;
    isDragging = true;
}

function onMouseUp() {
    isDragging = false;
}

function onTouchMove(event) {
    if (!isDragging || event.touches.length === 0) return;
    currentX = event.touches[0].clientX;
    currentY = event.touches[0].clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;

    rotationX += deltaY * 0.2;
    rotationY += deltaX * 0.2;

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    startX = currentX;
    startY = currentY;
}

function onTouchStart(event) {
    if (event.touches.length === 0) return;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    isDragging = true;
}

function onTouchEnd() {
    isDragging = false;
}

// Event listeners
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('touchmove', onTouchMove);
document.addEventListener('touchstart', onTouchStart);
document.addEventListener('touchend', onTouchEnd);
