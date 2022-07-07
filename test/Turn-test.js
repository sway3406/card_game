const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
let card;
let turn;

beforeEach(function() {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn = new Turn('object', card);
        });

        it('should be an instance of Turn', function(){
            expect(turn).to.be.an.instanceOf(Turn);
        });

        it('should be able to return a card', function(){

            expect(turn.returnCard()).to.equal(card);
        });

        it('should be able to return a guess', function(){

                expect(turn.returnGuess()).to.equal('object');
        });

        it('should be able to evaluate an answer', function(){
            
            expect(turn.evaluateGuess()).to.equal(true);
        });
        it('should be able to give feedback', function(){
            
            expect(turn.giveFeedback()).to.equal('correct!');
        });

});