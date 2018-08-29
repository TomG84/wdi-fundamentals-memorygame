console.log("Up and running!");

//Create an array of cards with 4 objects
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

//Create an empty array that will hold cards in play
var cardsInPlay = [];

//Create a function to hold game logic
var checkForMatch = function() {
		if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match");
		} else {
			alert("Sorry, try again.");
		}
	}
}

//Create a function to store all steps that should happen when user flips card
var flipCard = function(cardId) {
	var flippedCard = cards[cardId].rank;
	cardsInPlay.push(flippedCard);

	//Display card flipped over
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	checkForMatch();
};

flipCard([0]);
flipCard([2]);