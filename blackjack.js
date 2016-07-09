// give the type of suits
var heart = "heart", club = "club", spade = "spade", diamond = "diamond";

// value of card
var ace = 11, two = 2, three = 3, four = 4, five = 5, six = 6, seven = 7,
eight = 8, nine = 9, ten = 10, jack = 10, queen = 10, king = 10;

var suits = [heart, diamond, spade, club];

// make a simple js object to represent a card
function makeCard(suit, number) {
  return {suit: suit, number: number};
}

// Create a numbered card for each suit
function generateCards() {

  // make an empty array of cards
  var cards = [];

  for(var num = two; num <= ace; num++) {
      suits.forEach(function(suit){
        cards.push(makeCard(suit, num));
      });
  }
  return cards;
}

var deck = { //<---------------- WRITE THIS
    cards: [],
    draw: function(amount){
        console.log("TODO -- i should return a card and remove it from my internal list of cards");
    },
    add: function(card){ //this one's for free
        this.cards.push(card);
        return card;
    }
}

/*


//this function runs automatically bacause it is enclosed in parenthesis
//and then called immediately with the '()' after it.
//comment it out (or not)

(function(){
    var cards = generateCards();

    console.log('here are some cards: ');
    console.log(cards[4]);
    console.log(cards[9]);
    console.log(cards[15]);
    console.log('...');
})();

var cards = generateCards();

console.log('here are some cards: ');
console.log(cards[4]);
console.log(cards[9]);
console.log(cards[15]);
console.log('...');
*/
