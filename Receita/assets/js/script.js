// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Inicializa a página atual como 1
    let currentPage = 1;

    // Função para mostrar a página atual
    function showPage(pageNumber) {
        // Esconde todas as páginas
        document.querySelectorAll(".item").forEach(function (page) {
            page.style.display = "none";
        });

        // Mostra a página selecionada
        document.getElementById("page" + pageNumber).style.display = "block";

        // Atualiza a página atual
        currentPage = pageNumber;
    }

    // Event listeners para os botões de paginação
    document.getElementById("page1-button").addEventListener("click", function () {
        showPage(1);
    });

    document.getElementById("page2-button").addEventListener("click", function () {
        showPage(2);
    });

    document.getElementById("page3-button").addEventListener("click", function () {
        showPage(3);
    });

    // Inicialmente, mostra a primeira página
    showPage(currentPage);
});
