const perguntas = [
  {
    categoria: "Re:Zero",
    texto: "Qual é o nome completo do protagonista de Re:Zero?",
    opcoes: ["Subaru Natsuki", "Kazuma Satou", "Rudeus Greyrat", "Shinji Ikari"],
    correta: 0,
    explicacao: "O protagonista de Re:Zero se chama Subaru Natsuki."
  },
  {
    categoria: "Re:Zero",
    texto: "Qual habilidade especial Subaru possui?",
    opcoes: ["Teletransporte", "Retorno pela Morte", "Controle do Tempo", "Leitura Mental"],
    correta: 1,
    explicacao: "Subaru retorna a um ponto anterior sempre que morre."
  },
  { 
    categoria: "Re:Zero",
    texto: "Qual é o nome da meio-elfa que Subaru conhece primeiro?",
    opcoes: ["Rem", "Crusch", "Emilia", "Priscilla"],
    correta: 2,
    explicacao: "Emilia é a primeira personagem importante que Subaru encontra."
  },
  {
    categoria: "Re:Zero",
    texto: "Quem é a irmã gêmea de Rem?",
    opcoes: ["Ram", "Beatrice", "Felt", "Frederica"],
    correta: 0,
    explicacao: "Ram e Rem são irmãs gêmeas oni."
  },
  {
    categoria: "Re:Zero",
    texto: "Qual é o espírito que vive na biblioteca da mansão Roswaal?",
    opcoes: ["Puck", "Julius", "Beatrice", "Otto"],
    correta: 2,
    explicacao: "Beatrice passa a maior parte do tempo na biblioteca."
  },
  {
    categoria: "Re:Zero",
    texto: "Qual é o nome do espirito que acompanha Emilia?",
    opcoes: ["Puck", "Patrasche", "Beatrice", "Felix"],
    correta: 0,
    explicacao: "Puck é o espírito contratado por Emilia."
  },
  {
    categoria: "Re:Zero",
    texto: "Quem é o cavaleiro conhecido como o 'Melhor Cavaleiro' do reino?",
    opcoes: ["Reinhard", "Julius", "Wilhelm", "Ferris"],
    correta: 0,
    explicacao: "Reinhard van Astrea é considerado o cavaleiro mais poderoso."
  },
  {
    categoria: "Re:Zero",
    texto: "Qual é o nome da baleia gigante que aterroriza o reino?",
    opcoes: ["Grande Dragão", "Baleia Branca", "Leviatã", "Serpente Negra"],
    correta: 1,
    explicacao: "A Baleia Branca é uma das Três Grandes Mabeasts."
  },
  {
    categoria: "Re:Zero",
    texto: "Qual Arcebispo do Pecado é obcecado por Emilia e pela Bruxa?",
    opcoes: ["Regulus", "Petelgeuse", "Capella", "Sirius"],
    correta: 1,
    explicacao: "Petelgeuse Romanée-Conti representa a Preguiça."
  },
  {
    categoria: "Re:Zero",
    texto: "Qual é o nome da Bruxa da Inveja?",
    opcoes: ["Echidna", "Minerva", "Satella", "Sekhmet"],
    correta: 2,
    explicacao: "Satella é a Bruxa da Inveja e possui forte ligação com Subaru."
  } 

]

// ESTADO DO JOGO

let indiceAtual = 0;
let pontos = 0;
let acertos = 0;
let respostas = [];

// ELEMENTOS

const telaInicio = document.getElementById("tela-inicio");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");

const btnComecar = document.getElementById("btn-comecar");
const btnProxima = document.getElementById("btn-proxima");
const btnReiniciar = document.getElementById("btn-reiniciar");

const numeroPergunta = document.getElementById("numero-pergunta");
const placarAtual = document.getElementById("placar-atual");
const barraFill = document.getElementById("barra-fill");
const categoriaBadge = document.getElementById("categoria-badge");
const textoPergunta = document.getElementById("texto-pergunta");
const opcoesContainer = document.getElementById("opcoes-container");
const feedback = document.getElementById("feedback");
const feedbackIcone = document.getElementById("feedback-icone");
const feedbackTexto = document.getElementById("feedback-texto");

function mostrarTela(tela) {
  // seleciona todas que tem a classe 'tela'
  document.querySelectorAll(".tela").forEach(t => t.classList.remove("ativa"));
  tela.classList.add("ativa");
}

function carregarPergunta() {
    const pergunta = perguntas[indiceAtual];

    // Atualiza header
    numeroPergunta.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    placarAtual.innerHTML = `<i class="fas fa-star"></i> ${pontos} pts`;
    barraFill.style.width = `${((indiceAtual) / perguntas.length) * 100}%`;

    // Atualiza pergunta
    categoriaBadge.textContent = pergunta.categoria;
    textoPergunta.textContent = pergunta.texto;

    // Limpa opções e feedback
    opcoesContainer.innerHTML = "";
    feedback.classList.add("escondido");
    btnProxima.classList.add("escondido");

    // Cria botões de opção
    pergunta.opcoes.forEach((opcao, i)=> {
        const btn = document.createElement("button");
        btn.classList.add("opcao-btn");
        btn.innerHTML = `<span class = "opcao-letra">${i}</span> ${opcao}`;
        btn.addEventListener("click", () => responder(i, btn));
        opcoesContainer.appendChild(btn);
    });
}

function responder(indiceEScolhido, btnClicado) {
  const pergunta = perguntas[indiceAtual];
  const acertou = indiceEScolhido === pergunta.correta;

  // Desabilita todas as opções e destaca respostas
  document.querySelectorAll(".opcao-btn").forEach((btn, i) => {
      btn.disabled = true;

      if (i === pergunta.correta) {
          btn.classList.add("correta");
      }

      if (i === indiceEScolhido && !acertou) {
          btn.classList.add("errada");
      }
  });

  // Atualiza pontos e registro
  if (acertou) {
      pontos += 10;
      acertos++;
  }

  respostas.push({
      pergunta,
      escolhida: indiceEScolhido,
      acertou
  });

  // Mostra feedback
  feedback.classList.remove("escondido");

  feedbackIcone.classList.remove(
      "escondido",
      "feedback-certo",
      "feedback-errado"
  );

  if (acertou) {
      feedbackIcone.classList.add("feedback-certo");
      feedbackIcone.innerHTML = "✅";
      feedbackTexto.textContent = `Correto! ${pergunta.explicacao}`;
  } else {
      feedbackIcone.classList.add("feedback-errado");
      feedbackIcone.innerHTML = "❌";
      feedbackTexto.textContent = `Errado! ${pergunta.explicacao}`;
  }

  btnProxima.classList.remove("escondido");

  if (indiceAtual === perguntas.length - 1) {
      btnProxima.innerHTML =
          'Ver Resultado <i class="fas fa-flag-checkered"></i>';
  } else {
      btnProxima.innerHTML =
          'Próxima <i class="fas fa-arrow-right"></i>';
  }
}

function proximaPergunta() {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
  mostrarTela(telaResultado);
  barraFill.style.width = "100%";

  const erros = perguntas.length - acertos;
  const porcentagem = (acertos / perguntas.length) * 100;

  const resultadoemoji = document.getElementById("resultado-emoji");
  const resultadoTitulo = document.getElementById("resultado-titulo");
  const resultadoDescricao = document.getElementById("resultado-descricao");

  if (porcentagem === 100) {
      resultadoemoji.textContent = "🏆";
      resultadoTitulo.textContent = "Perfeito!";
      resultadoDescricao.textContent =
          "Você acertou todas as perguntas! Parabéns!";
  } else if (porcentagem >= 70) {
      resultadoemoji.textContent = "🎉";
      resultadoTitulo.textContent = "Ótimo Trabalho!";
      resultadoDescricao.textContent =
          `Você acertou ${acertos} de ${perguntas.length} perguntas. Excelente!`;
  } else if (porcentagem >= 40) {
      resultadoemoji.textContent = "🙂";
      resultadoTitulo.textContent = "Bom Esforço!";
      resultadoDescricao.textContent =
          `Você acertou ${acertos} de ${perguntas.length} perguntas. Continue praticando!`;
  } else {
      resultadoemoji.textContent = "😕";
      resultadoTitulo.textContent = "Precisa Melhorar!";
      resultadoDescricao.textContent =
          `Você acertou ${acertos} de ${perguntas.length} perguntas. Tente novamente!`;
  }

  document.getElementById("acertos-numero").textContent = acertos;
  document.getElementById("pontos-numero").textContent = pontos;
  document.getElementById("erros-numero").textContent = erros;

  const revisaoLista = document.getElementById("revisao-lista");
  revisaoLista.innerHTML = "";

  respostas.forEach((r, i) => {
      const item = document.createElement("div");

      item.classList.add(
          "revisao-item",
          r.acertou ? "revisao-certa" : "revisao-errada"
      );

      item.innerHTML = `
          <span class="revisao-icone">${r.acertou ? "✅" : "❌"}</span>
          <div>
              <strong>Q${i + 1}:</strong> ${r.pergunta.texto}
              ${
                  !r.acertou
                      ? `<br><small>Resposta certa: <b>${r.pergunta.opcoes[r.pergunta.correta]}</b></small>`
                      : ""
              }
          </div>
      `;

      revisaoLista.appendChild(item);
  });
}

function  reiniciar() {
    indiceAtual = 0;
    pontos = 0;
    acertos = 0;
    respostas = [];
    barraFill.style.width = `0%`;
    mostrarTela(telaInicio);
}

// EVENTOS

btnComecar.addEventListener("click", () => {
    mostrarTela(telaQuiz);
    carregarPergunta();
});

btnProxima.addEventListener("click", proximaPergunta);
btnReiniciar.addEventListener("click", reiniciar);