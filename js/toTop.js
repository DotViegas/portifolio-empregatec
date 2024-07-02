// Adicione este código ao seu arquivo toTop.js

// Quando o usuário rolar a página para baixo 20px do topo, mostra o botão
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector("#buttonToTop").style.display = "block";
    } else {
        document.querySelector("#buttonToTop").style.display = "none";
    }
}

// Quando o usuário clicar no botão, rola para o topo da página
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
