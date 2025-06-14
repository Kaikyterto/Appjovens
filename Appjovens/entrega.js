window.addEventListener("DOMContentLoaded", () => {
    const paragrafo = document.getElementById("paraEntrega");
    const btnEntregue = document.getElementById("btnEntregue");

    
    const lista = JSON.parse(localStorage.getItem("pedidoParaEntrega")) || [];

    if (paragrafo) {
        paragrafo.innerText = lista.map(item => {
            const nome = Object.keys(item)[0];
            return `${nome}: ${item[nome]}`;
        }).join('\n');
    }

    
    btnEntregue.addEventListener("click", () => {
        localStorage.removeItem("pedidoParaEntrega");
        if (paragrafo) {
            paragrafo.innerText = "Todos os pedidos foram entregues.";
        }
    });
});
