let clickCount = 0;
const flame = document.querySelector('.flame');
const loveLetter = document.getElementById('love-letter');
const birthdaySong = document.getElementById('birthday-song');
const body = document.querySelector('body');
const confettiContainer = document.getElementById('confetti-container');
const clickInstruction = document.querySelector('.click-instruction');

document.addEventListener('click', handleClick);

function handleClick() {
    clickCount++;
    
    if (clickCount === 1) {
        // First click: Play song and show confetti
        birthdaySong.src = birthdaySong.src.replace('&mute=1','');
        clickInstruction.textContent = 'Click again to blow out the candle';
        createConfetti();
    } 
    else if (clickCount === 2) {
        // Second click: Blow out candle
        flame.classList.add('out');
        clickInstruction.textContent = 'Click to read a special message';
        body.style.background = 'radial-gradient(circle, #2C3E50, #1A252F)';
    } 
    else if (clickCount === 3) {
        // Third click: Show love letter
        loveLetter.classList.add('show');
        clickInstruction.style.display = 'none';
    }
}

function createConfetti() {
    const colors = ['#FFD700', '#FF6347', '#FF1493', '#00CED1', '#98FB98', '#DDA0DD'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = 4 + Math.random() * 3 + 's';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 7000);
        }, i * 20);
    }
}

// Add some interactive hover effect for desktop
const cake = document.querySelector('.cake');
if (window.innerWidth > 600) {
    cake.addEventListener('mouseenter', () => {
        cake.style.transform = 'rotateX(60deg) rotateY(5deg)';
    });
    
    cake.addEventListener('mouseleave', () => {
        cake.style.transform = 'rotateX(60deg) rotateY(0deg)';
    });
}