// Animação de scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('in-view');
        }
    });
});

// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}
