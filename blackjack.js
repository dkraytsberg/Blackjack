// give the type of suits
var heart = "heart", club = "club", spade = "spade", diamond = "diamond";

// cardName array
var cardName = ["ace", "two", "three", "four", "five", "six", "seven",
              "eight", "nine", "ten", "jack", "queen", "king"];

// suit array
var suits = [heart, diamond, spade, club];

// make a simple js object
function makeCard(suit, cardName, num) {
  return {suit: suit, cardName: cardName};
}

function generateCards() {

  // make empty array of cards
  var cards = [];

  cardName.forEach(function(cardName) {
    suits.forEach(function(suit) {
      cards.push(makeCard(suit, cardName));
    });
  });

  return cards;
}

var deck = {
  cards: generateCards(),
  draw: function(amount) {
    var cards = [];
    for(var i = 0; i < amount && this.cards.length > 0; i++) {
      var randomCard = Math.round(Math.random() * this.cards.length - 1);
      
      cards.push(this.cards.splice(randomCard, 1))

    }
    return card;
  },
  add: function(card) {
      this.cards.push(card);
      return card;
  },
}

var player1 = new Object();
var player2 = new Object();

// shuffle
// console.log(generateCards());

var player1 = deck.draw(15);
console.log(player1);
// var player2 = deck.draw(2);
// console.log(player2);
console.log('...');
