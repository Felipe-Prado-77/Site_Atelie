const alvos = document.querySelectorAll('.split-text, .split-media');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observer.unobserve(entrada.target); // só anima uma vez
        }
    });
}, { threshold: 0.2 }); // dispara quando 20% do bloco estiver visível

alvos.forEach(el => observer.observe(el));

