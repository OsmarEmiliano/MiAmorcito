const cube = document.getElementById('cube');
let startX, startY, currentX, currentY, isDragging = false;

function onMouseMove(event) {
    if (!isDragging) return;
    currentX = event.clientX;
    currentY = event.clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    const rotationX = deltaY * 0.2;
    const rotationY = -deltaX * 0.2;
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
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
    if (event.touches.length > 0) {
        currentX = event.touches[0].clientX;
        currentY = event.touches[0].clientY;
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
        const rotationX = deltaY * 0.2;
        const rotationY = -deltaX * 0.2;
        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }
}

function onTouchStart(event) {
    if (event.touches.length > 0) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    }
}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('touchmove', onTouchMove);
document.addEventListener('touchstart', onTouchStart);
document.addEventListener('touchend', onMouseUp);
