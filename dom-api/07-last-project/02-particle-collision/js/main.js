const particles = [];

for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    const size = 10 + (Math.random() * 40);
    const x = Math.random() * (innerWidth - size);
    const y = Math.random() * (innerHeight - size);
    let dx = (5 + Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1);
    let dy = (5 + Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1);

    particle.style.position = 'absolute';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.borderRadius = `${Math.random() * 50}%`;
    particle.style.transform = `rotate(${Math.random() * 360}deg)`;

    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    particle.style.backgroundColor = `rgb(${r},${g},${b})`;

    document.body.append(particle);
    particles.push({
       particle,
       size,
       dx,
       dy
    });
}

setInterval(() => {
    for (const p of particles) {
        const {dx, dy, size, particle} = p;
        particle.style.left = `${particle.offsetLeft + dx}px`;
        particle.style.top = `${particle.offsetTop + dy}px`;

        if ((particle.offsetTop + size) >= innerHeight || (particle.offsetTop) <= 0) p.dy = -dy;
        if ((particle.offsetLeft + size) >= innerWidth || (particle.offsetLeft) <= 0) p.dx = -dx;
    }
}, 50);

const cursorElm = document.createElement('div');
cursorElm.classList.add('cursor');
document.body.append(cursorElm);

addEventListener('mousemove', (e)=>{
    cursorElm.style.opacity = '1';
    cursorElm.classList.remove('cursor-fade');
    cursorElm.style.left = `${e.clientX - cursorElm.offsetWidth / 2}px`;
    cursorElm.style.top = `${e.clientY - cursorElm.offsetHeight / 2}px`;
});

addEventListener('mouseout', ()=>{
    cursorElm.classList.add('cursor-fade');
});