const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');



describe('Game', () => {
    let game;

    beforeEach( () => {
    game = new Game();

    });

    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });


    it('should create new cards', () => {

        expect(game.createCards()).to.be.an('array');
    });

    it('should put cards in a deck', () => {

        expect(game.placeCardsInDeck()).to.be.an('object');
    });

    it('should create a new round using the deck', () => {

        expect(game.createNewRound()).to.be.an('object');
    });
});