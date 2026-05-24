// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
if (hamburger && navUl) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navUl.classList.toggle('open');
    });
    navUl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navUl.classList.remove('open');
    }));
}

// Signature rainbow canvas
document.querySelectorAll('.sig-canvas').forEach(canvas => {
    const W = 150, H = 48;
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = canvas.dataset.sig;
    let hue = 0;
    img.onload = () => {
        (function frame() {
            ctx.clearRect(0, 0, W, H);
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.fillRect(0, 0, W, H);
            ctx.globalCompositeOperation = 'destination-in';
            ctx.drawImage(img, 0, 0, W, H);
            hue = (hue + 0.7) % 360;
            requestAnimationFrame(frame);
        })();
    };
});
