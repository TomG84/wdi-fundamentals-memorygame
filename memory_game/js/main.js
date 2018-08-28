console.log("Up and running!");

//Create an array of cards with 4 strings
var cards = ["queen", "king", "queen", "king"];

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
	var cardOne = cards[cardId];
	cardsInPlay.push(cardOne);

	//Display card flipped over
	console.log("User flipped " + cards[cardId]);

	checkForMatch();
};

flipCard([0]);
flipCard([1]);