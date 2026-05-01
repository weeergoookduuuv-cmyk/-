
console.log("Bek.js успешно подключен! Колледж готов к работе.");


const mainTitle = document.querySelector('h1');
mainTitle.style.cursor = 'pointer';

mainTitle.addEventListener('click', () => {
    const colors = ['Gold', 'DeepSkyBlue', 'Crimson', 'SpringGreen', 'Violet'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    mainTitle.style.color = randomColor;
    mainTitle.style.textShadow = 0 0 20px ${randomColor};
});


const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'all 0.6s ease-out';
    observer.observe(item);
});


document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'b' || event.key.toLowerCase() === 'и') {
        alert('🚀 Привет от создателя сайта — Бекбола! Учись в OSMU и строй будущее!');
    }
});

console.log("System initialized...");

const mainTitle = document.querySelector('h1');
const text = mainTitle.innerText;
mainTitle.innerText = '';
let i = 0;

function typeEffect() {
    if (i < text.length) {
        mainTitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 150);
    }
}

mainTitle.addEventListener('click', () => {
    const colors = ['Gold', 'DeepSkyBlue', 'Crimson', 'SpringGreen', 'Violet'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    mainTitle.style.color = randomColor;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';
    item.style.transition = '0.7s ease-out';
    observer.observe(item);
});

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'b' || e.key.toLowerCase() === 'и') {
        alert('🚀 Welcome to the future of OSMU!');
    }
});

window.onload = typeEffect;