const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
    constructor(userGuess, card) {
        this.userGuess = userGuess;
        this.card = card;
    }
    returnGuess() {
        return this.userGuess;
    }
    returnCard() {
        return this.card;
    }
    evaluateGuess() {
        if (this.userGuess !== this.card.correctAnswer) {
            return false;
        } else {
            return true;
        } 
    }
    giveFeedback(){
        if(this.evaluateGuess() === true) {
            return 'correct!';
        } else {
            return 'incorrect!';
        }
    }
}

module.exports = Turn;