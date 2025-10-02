document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('particle-container');
    const numParticles = 150; // Adjust for density
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

    // Set container height to match scrollable content
    container.style.height = `${docHeight}px`;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 3 + 2;
        particle.style.setProperty('--size', `${size}px`);

        
        const duration = Math.random() * 7 + 3;
        particle.style.setProperty('--duration', `${duration}s`);

        const delay = -Math.random() * duration;
        particle.style.animationDelay = `${delay}s`;

        const left = Math.random() * 100;
        particle.style.setProperty('--left', `${left}%`);

        const z = Math.random() * 600 - 400;
        particle.style.setProperty('--z', `${z}px`);

        const opacity = Math.random() * 0.5 + 0.5;
        particle.style.setProperty('--opacity', opacity);

        particle.style.setProperty('--fall-height', `${docHeight + 10}px`); // Extend slightly beyond page height
        particle.style.animation = `fall ${duration}s linear infinite`;

        container.appendChild(particle);
    }
});