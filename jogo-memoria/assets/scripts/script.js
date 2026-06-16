const cover = "assets/images/cover.png";

const players = [
    "alisson.webp",
    "cristiano.webp",
    "endrick.webp",
    "mbape.webp",
    "messi.webp",
    "neymar.webp"
];

const board = document.getElementById("board");

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let points = 0;

const moveText = document.querySelector(".info span:first-child");
const pointText = document.querySelector(".info span:last-child");

let gameCards = [...players, ...players];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startGame() {
    board.innerHTML = "";

    gameCards = shuffle([...players, ...players]);

    gameCards.forEach(player => {
        const card = document.createElement("div");
        card.classList.add("carta");

        const img = document.createElement("img");
        img.src = cover;
        img.dataset.player = player;

        card.appendChild(img);
        card.addEventListener("click", flipCard);

        board.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;

    const img = this.querySelector("img");

    if (img.src.includes(img.dataset.player)) return;

    img.src = `assets/images/${img.dataset.player}`;
    this.classList.add("virada");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    moves++;
    moveText.textContent = `Jogadas: ${moves}`;

    checkPair();
}

function checkPair() {
    const img1 = firstCard.querySelector("img");
    const img2 = secondCard.querySelector("img");

    if (img1.dataset.player === img2.dataset.player) {

        firstCard.classList.add("encontrada");
        secondCard.classList.add("encontrada");

        points++;
        pointText.textContent = `Pontos: ${points}`;

        resetTurn();

        if (points === players.length) {
            document.getElementById("winMessage").textContent =
                "🏆 Parabéns! Você encontrou todos os jogadores!";
        }

    } else {

        setTimeout(() => {
            img1.src = cover;
            img2.src = cover;

            firstCard.classList.remove("virada");
            secondCard.classList.remove("virada");

            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

document.querySelector("button").addEventListener("click", () => {
    moves = 0;
    points = 0;

    moveText.textContent = "Jogadas: 0";
    pointText.textContent = "Pontos: 0";

    document.getElementById("winMessage").textContent = "";

    startGame();
});

startGame();