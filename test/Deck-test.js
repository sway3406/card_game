const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const {prototypeData} = require('../src/data');

describe('Deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    it('should be an instance of Deck', function(){
        let deck = new Deck();
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should know how many cards are in a deck', function(){
        let deck = new Deck([card1, card2, card3]);
        const card = new Card();

        expect(deck.countCards()).to.equal(3);
    });

});