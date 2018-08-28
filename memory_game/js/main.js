console.log("Up and running!");
//Create variables for four cards, with two values
/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
//Display the value of two cards flipped by user
console.log("User flipped " + cardThree);
console.log("User flipped " + cardFour);*/

//Create an array of cards with 4 strings
var cards = ["queen", "king", "queen", "king"];

//Create an empty array that will hold cards in play
var cardsInPlay = [];

//Create a variable to represent first card user flipps
var cardOne = cards[0];

//Add this card to the cardsInPlay array
cardsInPlay.push(cardOne);

//Display this first card in the console
console.log("User flipped " + cardsInPlay[0]);

//Create a variable for second card user flips
var cardTwo = cards[2];

//Add this card to the cardsInPlay array
cardsInPlay.push(cardTwo);

//Display cardsInPlay array
console.log("User flipped " + cardsInPlay[0] + " and " + cardsInPlay[1]);

//Check to make sure user flipped two cards
if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
			alert("Sorry, try again.");
		}
	}
