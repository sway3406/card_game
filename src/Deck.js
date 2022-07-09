const Card = require('./Card');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Deck {
    constructor(cardDeck) {
        this.cardDeck = cardDeck;
    }
    countCards() {
        return this.cardDeck.length;
    }
    
}

module.exports = Deck;
