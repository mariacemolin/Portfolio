// Exemplo de um simples script para interação
document.addEventListener("DOMContentLoaded", function() {
    const projetos = document.querySelectorAll(".projeto");

    projetos.forEach(projeto => {
        projeto.addEventListener("mouseover", function() {
            projeto.style.transform = "scale(1.05)";
            projeto.style.transition = "transform 0.3s ease";
        });

        projeto.addEventListener("mouseout", function() {
            projeto.style.transform = "scale(1)";
        });
    });
});
