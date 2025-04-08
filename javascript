// Animações e interatividade podem ser adicionadas aqui

// Exemplo simples de animação com scroll
window.addEventListener('scroll', function() {
    const title = document.querySelector('.section-title h2');
    if (window.scrollY > 100) {
        title.classList.add('animate');
    } else {
        title.classList.remove('animate');
    }
});
