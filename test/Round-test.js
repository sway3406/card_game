const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');


describe('Round', () => {
    let round;
    let deck;
    let card;
    let turn;
    

    beforeEach( () => {

        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = new Card(4, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        card3 = new Card(7, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        turn = new Turn('object', card);
    });

    it('should be an instance of Round', () => {

        expect(round).to.be.an.instanceOf(Round);
    });

    it('should return the current card', () => {

        let currentCard = round.returnCurrentCard();
        // round.takeTurn();
        expect(currentCard).to.equal(deck.cardDeck[0]);

        // round.takeTurn('array');

        // expect(currentCard).to.equal(deck.cardDeck[1]);

    });

    it('should start with a turn count of zero', () => {
        
        expect(round.turns).to.equal(0);
    });

    it('should start with no incorrect guesses', () => {
        
        expect(round.incorrectGuesses).to.deep.equal([]);
    });

    it('should create a new instance of Turn when a guess is made', () => {

        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should update the turns count each guess', () => {

        round.takeTurn('object');

        expect(round.turns).to.equal(1);
    });

    it('should be able to store incorrect guesses', () => {

        round.takeTurn('array');

        expect(round.incorrectGuesses).to.have.lengthOf(1);
    });

    it('should evaluate a guess for each turn and give feedback', () => {

        round.takeTurn('array');

        expect(round.takeTurn()).to.equal('incorrect!');
    });

    it('should calculate and return the % of correct guesses', () => {

        round.takeTurn('object');
        round.takeTurn('array');
        round.takeTurn('accessor method');

        let percentCorrect = round.calculatePercentCorrect();
    
        expect(percentCorrect).to.equal(66);
    });

    it('should be able to end a round & tell you your correct %', () => {

        round.takeTurn('object');
        round.takeTurn('array');
        round.takeTurn('accessor method');

        let endRound = round.endRound();

        expect(endRound).to.equal(`**Round over** You answered 66% of the questions correctly!`);
    });

});