import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// List different suits
const SUITS = [
  {
    type: "spades",
    link: "https://static-00.iconduck.com/assets.00/spades-icon-1793x2048-pazqul4w.png"
  },
  {
    type: "diamonds",
    link: "https://static-00.iconduck.com/assets.00/diamond-suit-emoji-750x1024-37v25znp.png"
  },
  {
    type: "hearts",
    link: "https://static-00.iconduck.com/assets.00/heart-suit-emoji-512x457-yvmca1xi.png"
  },
  {
    type: "clubs",
    link: "https://static-00.iconduck.com/assets.00/black-club-suit-emoji-256x256-gpq4i01e.png"
  }
];

const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// Get a random item from a list
function getRandom(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// Generate a random card
function getRandomCard() {
  const suit = getRandom(SUITS);
  const number = getRandom(NUMBERS);
  return { suit, number };
}

// Update visuals for a card
function updateCardVisual(card, topSelector, bottomSelector, bodySelector) {
  document.querySelector(topSelector).src = card.suit.link;
  document.querySelector(bottomSelector).src = card.suit.link;
  document.querySelector(bodySelector).textContent = card.number;
}

// Card One: just generate and show
function refreshCardOne() {
  const card = getRandomCard();
  updateCardVisual(card, "#cardOneTop", "#cardOneBottom", "#cardOneBody");
  return card;
}

// Card Two: keep picking until it’s not the same as Card One
function refreshCardTwo(forbiddenCard) {
  let card;
  do {
    card = getRandomCard();
  } while (
    card.suit.type === forbiddenCard.suit.type &&
    card.number === forbiddenCard.number
  );
  updateCardVisual(card, "#cardTwoTop", "#cardTwoBottom", "#cardTwoBody");
}

// On page load
window.onload = function () {
  const forbiddenCard = refreshCardOne();
  refreshCardTwo(forbiddenCard);
};

// Yes button (you won)
const yesButton = document.querySelector("#yes-btn");
yesButton.addEventListener("click", function () {
  alert("Yay! You Won! Refresh to play again");
});

// Play Again button
const playAgainButton = document.querySelector("#playagain-btn");
playAgainButton.addEventListener("click", function () {
  const forbiddenCard = refreshCardOne();
  refreshCardTwo(forbiddenCard);
});
