
var gameBoard = document.getElementById("game-board");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


var isMatch = function(){
	if (cardsInPlay[0]==cardsInPlay[1])
		alert("You Found a Match!");
	else
		alert ("Try Again");
	reset();
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') == "king")
		this.innerHTML = '<img src="king.png" alt="King" />';
	else
		this.innerHTML = '<img src="queen.png" alt="Queen" />';
	if (cardsInPlay.length === 2) {
		isMatch();
		cardsInPlay = [];
	}
}


var createBoard = function(){
	for (var i = 0; i< cards.length; i++) {
		var cardElement = document.createElement("div");
		cardElement.className = "card";
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
        gameBoard.appendChild(cardElement);
	}
}

var reset = function(){
	for (var i = 0; i < 4; i++) {
		document.getElementsByClassName("card")[i].innerHTML = "";
	}
}

createBoard();
