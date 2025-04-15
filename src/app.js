import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//list different suits
const SUITS = [{
  type: "spades",
  link: "https://static-00.iconduck.com/assets.00/spades-icon-1793x2048-pazqul4w.png"
}, {
  type: "diamonds",
  link: "https://static-00.iconduck.com/assets.00/diamond-suit-emoji-750x1024-37v25znp.png" 
}, {
  type: "hearts",
  link: "https://static-00.iconduck.com/assets.00/heart-suit-emoji-512x457-yvmca1xi.png" 
}, {
  type: "clubs",
  link: "https://static-00.iconduck.com/assets.00/black-club-suit-emoji-256x256-gpq4i01e.png" 
}];
const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

function getRandom(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

function refreshCard(event) {
  // pick a suit
  const suit = getRandom(SUITS);
  // pick an image
  const number = getRandom(NUMBERS);
  //get the image for the suit
  const suitImage = suit.link;
  // get ahold of the img tag, and update the source attribute
  const symbolOne = document.querySelector("#symbolOne");
  symbolOne.src = suitImage;
  const symbolTwo = document.querySelector("#symbolTwo");
  symbolTwo.src = suitImage;
  // get ahold of the card body, and update textContent with bio
  const cardBody = document.querySelector("h1");
  cardBody.textContent = number;
};


window.onload = function () {
  refreshCard();
  // get ahold of the button
  const button = document.querySelector("#refresh-btn");
  // prepare this button to refresh a friend
  button.addEventListener(
      "click",
      refreshCard
  );
};