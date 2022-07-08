const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const {prototypeData} = require('../src/data');

describe('Turn', function() {
let card;
let turn;

beforeEach(function() {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn = new Turn('object', card);
        });

        it('should be an instance of Turn', () => {
            expect(turn).to.be.an.instanceOf(Turn);
        });

        it('should be able to return a card', () => {

            expect(turn.returnCard()).to.equal(card);
        });

        it('should be able to return a guess', () => {

                expect(turn.returnGuess()).to.equal('object');
        });

        it('should be able to evaluate an answer', () => {
            
            expect(turn.evaluateGuess()).to.equal(true);
        });
        it('should be able to give feedback', () => {
            
            expect(turn.giveFeedback()).to.equal('correct!');
        });

});