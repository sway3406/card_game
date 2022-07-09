const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
    this.cardDeck = null
  }


  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  createCards() {
    let cards = prototypeQuestions.map((newCard) => {
        return new Card(newCard.id, newCard.question,newCard.answers,newCard.correctAnswer)
      }); 
      return cards;
  }
  placeCardsInDeck() {
    return this.cardDeck = new Deck(this.createCards());
  }
  createNewRound() {
    return this.currentRound = new Round(this.placeCardsInDeck());
  }
  startGame() {
    this.printMessage(this.placeCardsInDeck(), this.createNewRound());
    this.printQuestion(this.createNewRound());
    this.createNewRound();
  }
}

module.exports = Game;