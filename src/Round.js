const Card = require('./Card');
const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Round {
    constructor(deck) {
        this.deck = deck.cardDeck;
        this.turns = 0;
        this.incorrectGuesses = [];

    }
    returnCurrentCard() {
        return this.deck[this.turns];
    }
    takeTurn(userGuess) {
        const turn = new Turn(userGuess, this.returnCurrentCard())
        this.turns++;
        if (turn.evaluateGuess() === false) {
            this.incorrectGuesses.push(this.returnCurrentCard());
        } 
            return turn.giveFeedback();
    }
    calculatePercentCorrect() {
        return parseInt(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
    }
    endRound() {
        return `**Round over** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round;