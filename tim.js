var heart = "heart", diamond = "diamond", spade = "spade", club = "club";
var ace = 1, jack = 11, queen = 12, king = 13;
var suits = [heart, diamond, spade, club];

//make a simple js object to represent a card
function makeCard(suit, number){
    return {suit: suit, number: number};
}

//create a numbered card for each suit
function generateCards(){
    var cards = [];

    for(var num = ace; num <= king; num++){
        suits.forEach(function(suit){
            cards.push(makeCard(suit, num));
        })
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


//this function runs automatically bacause it is enclosed in parenthesis
//and then called immediately with the '()' after it.
//comment it out (or not)
/*
(function(){
    var cards = generateCards();

    console.log('here are some cards: ');
    console.log(cards[4]);
    console.log(cards[9]);
    console.log(cards[15]);
    console.log('...');
})();
*/
var cards = generateCards();

console.log('here are some cards: ');
console.log(cards[4]);
console.log(cards[9]);
console.log(cards[15]);
console.log('...');
