// Código js
// Adiciona comportamento de hover aos títulos das seções
const sectionTitles = document.querySelectorAll('h2');

sectionTitles.forEach(function(title) {
    title.addEventListener('mouseenter', function() {
        title.style.color = '#007BFF'; // Cor ao passar o mouse
    });

    title.addEventListener('mouseleave', function() {
        title.style.color = '#333'; // Cor quando o mouse sai
    });
});
