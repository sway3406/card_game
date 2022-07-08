const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
// const { prototypeData } = require('../src/data');


describe('Round', () => {
    let round;
    let deck;
    let card;
    let turn;
    

    beforeEach( () => {
        // let cards = [];
        //     prototypeData.forEach((getCard) => {
        //         cards.push(new Card(getCard.id, getCard.question, getCard.answers, getCard.correctAnswer));
        // }); 

        // deck = new Deck(cards);
        // round = new Round(deck);

        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        turn = new Turn('object', card);
    });

    it('should be an instance of Round', () => {

        expect(round).to.be.an.instanceOf(Round);
    });

    it('should return the current card', () => {

        let currentCard = round.returnCurrentCard();

        expect(currentCard).to.equal(round.deck.cardDeck[0]);
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

        round.takeTurn();

        expect(round.turns).to.equal(1);
    });

    it('after a turn is taken the next card becomes the current card', () => {

        
    });

    it.skip('should be able to evaluate a guess each turn', () => {

        expect(round.takeTurn()).to.be.a('correct');
    });


});