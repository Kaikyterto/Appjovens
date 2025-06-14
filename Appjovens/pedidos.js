let proxPedido = [];

function enviar() {
    let produto = document.getElementById("pedidos").value;
    let nome = document.getElementById("nome").value;

    proxPedido = JSON.parse(localStorage.getItem("pedidoParaEntrega")) || [];
    proxPedido.push({ [nome]: produto });

    localStorage.setItem("pedidoParaEntrega", JSON.stringify(proxPedido));
    produto=document.getElementById("pedidos").value=""
    nome=document.getElementById("nome").value=""
}

window.addEventListener("DOMContentLoaded", () => {
    const paragrafo = document.getElementById("paraEntrega");

    if (paragrafo) {
        const lista = JSON.parse(localStorage.getItem("pedidoParaEntrega")) || [];

        paragrafo.innerText = lista.map(item => {
            const nome = Object.keys(item)[0];
            return `${nome}: ${item[nome]}`;
        }).join('\n');
    }
});