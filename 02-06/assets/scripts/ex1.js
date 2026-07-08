// 1. Mudar texto do título
const titulo = document.getElementById("titulo");
const btnTitulo = document.getElementById("btnTitulo");

btnTitulo.addEventListener("click", () => {
    titulo.textContent = "Título Novo";
});

// 2. Adicionar/Remover classe
const paragrafo = document.getElementById("paragrafo");
const btnClasse = document.getElementById("btnClasse");

btnClasse.addEventListener("click", () => {
    paragrafo.classList.toggle("destaque");
});

// 3. Adicionar item na lista
const lista = document.getElementById("lista");
const btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", () => {
    const novoItem = document.createElement("li");
    novoItem.textContent = "Novo Item";
    lista.appendChild(novoItem);
});

// 4. Remover elemento
const caixa = document.getElementById("caixa");
const btnRemover = document.getElementById("btnRemover");

btnRemover.addEventListener("click", () => {
    caixa.remove();
});

// 5. Alterar texto em tempo real
const inputTexto = document.getElementById("inputTexto");
const resultado = document.getElementById("resultado");

inputTexto.addEventListener("input", () => {
    resultado.textContent = inputTexto.value;
});