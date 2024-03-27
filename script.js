//images array, doubled up for matching

const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

//sort images randomly each time
cardArray.sort(() => 0.5 - Math.random());

//get grid from HTML by the id of teh div element
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

//array for cards chosen
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

//function to create images for each ITEM in the cardArray

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const image = document.createElement("img");
    image.setAttribute("src", "images/blank.png");
    image.setAttribute("data-id", i);
    image.addEventListener("click", flipCard);
    gridDisplay.append(image);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const option1Id = cardsChosenIds[0];
  const option2Id = cardsChosenIds[1];
  console.log("Check for match");
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("A match!!!!");
    cards[option1Id].setAttribute("src", "images/white.png");
    cards[option2Id].setAttribute("src", "images/white.png");
    cards[option1Id].removeEventListener("click", flipCard);
    cards[option2Id].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[option2Id].setAttribute("src", "images/blank.png");
    cards[option1Id].setAttribute("src", "images/blank.png");
    alert("Sorry. Try again!");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! you found them all!";
    document.querySelector("body").style.backgroundColor = "#60b347";
  }
}
//function to flip card
function flipCard() {
  //think of which image I clicked on, get tge id of the card
  const cardId = this.getAttribute("data-id");
  const cardName = cardArray[cardId].name;

  cardsChosen.push(cardName);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen, cardsChosenIds);
  //add image wne I flip card
  this.setAttribute("src", cardArray[cardId].img);
  //if not matches
  if (cardsChosen.length == 2) {
    //callfunction after a certain amount of time is passed]
    setTimeout(checkMatch, 500);
  }
}
