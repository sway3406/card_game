const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const {prototypeData} = require('../src/data');

describe('Deck', function() {
    let deck;
    let card;

    beforeEach( () => {
        let cards = [];
            prototypeData.forEach((getCard) => {
                cards.push(new Card(getCard.id, getCard.question, getCard.answers, getCard.correctAnswer));
        }); 
        deck = new Deck(cards);
        
    });
    
    it('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should know how many cards are in a deck', () => {

        expect(deck.countCards()).to.equal(prototypeData.length);
    });

    it('a card in the deck sould be an instance of Card', () => {

        expect(deck.cardDeck[0]).to.be.an.instanceOf(Card);
    });

});