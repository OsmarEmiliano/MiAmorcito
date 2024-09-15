const cube = document.getElementById('cube');
const audio = document.getElementById('background-music');

let startX, startY, currentX, currentY, isDragging = false;
let rotationX = 0, rotationY = 0;

function onMouseMove(event) {
    if (!isDragging) return;
    currentX = event.clientX;
    currentY = event.clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    rotationX += deltaY * 0.2;
    rotationY -= deltaX * 0.2;
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
    if (event.touches.length > 0) {
        currentX = event.touches[0].clientX;
        currentY = event.touches[0].clientY;
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
        rotationX += deltaY * 0.2;
        rotationY -= deltaX * 0.2;
        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        startX = currentX;
        startY = currentY;
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

// Adjust the canvas size and animation
const canvas = document.getElementById('rainfall');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const raindrops = [];

function createRaindrop() {
    const x = Math.random() * canvas.width;
    const y = -5;
    const speed = Math.random() * 5 + 2;
    const length = Math.random() * 20 + 10;

    raindrops.push({ x, y, speed, length });
}

function updateRaindrops() {
    for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i];

        raindrop.y += raindrop.speed;

        if (raindrop.y > canvas.height) {
            raindrops.splice(i, 1);
            i--;
        }
    }
}

function drawRaindrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;

    for (const raindrop of raindrops) {
        ctx.beginPath();
        ctx.moveTo(raindrop.x, raindrop.y);
        ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
        ctx.stroke();
    }
}

function animate() {
    updateRaindrops();
    drawRaindrops();
    requestAnimationFrame(animate);
}

setInterval(createRaindrop, 100);
animate();

/*Menarop*/