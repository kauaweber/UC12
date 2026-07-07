
let historicoOperacoes = [];

function clicou(valor){
  document.getElementById("visor").value += valor;
}

function resultado(){
  let conta = document.getElementById("visor").value;
  let res = eval(conta);
  document.getElementById("visor").value = res;
  historicoOperacoes.unshift(`${conta.replace(/\*/g, ' × ').replace(/\//g, ' ÷ ')} = ${res}`);
  document.getElementById("historico").innerHTML = historicoOperacoes
    .slice(0, 10)
    .map(op => `<div>${op}</div>`)
    .join('');
}

function limpar(){
  document.getElementById("visor").value = "";
}


document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key)) {
    clicou(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    clicou(key);
  } else if (key === 'Enter' || key === '=') {
    resultado();
    event.preventDefault();
  } else if (key === 'Backspace') {
    apagarUltimo();
    event.preventDefault();
  } else if (key === 'Delete') {
    limpar();
    event.preventDefault();
  } else if (key === '.') {
    clicou('.');
  }
});


function trocarTema() {
  if (document.body.classList.contains('escuro')) {
    document.body.classList.remove('escuro');
    document.body.classList.add('claro');
  } else {
    document.body.classList.remove('claro');
    document.body.classList.add('escuro');
  }
}

document.body.classList.add('escuro');

function apagarUltimo() {
  const visor = document.getElementById("visor");
  visor.value = visor.value.slice(0, -1);
}