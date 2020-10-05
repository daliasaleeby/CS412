const {fun1} = require('./PS1.P1');
const {evaluate} = require('./PS1.P2');
const {fun3} = require('./PS1.P3');
const {describe, it} = require('mocha');
const {expect} = require('chai');

//problem 1
describe('P1 test', () => {
    it('should return xuutsssrrppoollliiiiiiigfeedcccaaa when passed supercalifragilisticexpialidocious', () => {
        expect(fun1('supercalifragilisticexpialidocious')).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa');
    });
    it('should return ohell when passed hello', () => {
        expect(fun1('hello')).to.be.equal('ohell');
    });
});

//problem 2
//I tested for result of the expression because correct result implies correct function was evaluated
describe('P2 test', () => {
    it('should return 6 when passed 4+2', () => {
        expect(evaluate('4+2')(4,2)).to.be.equal(6);
    });
    it('should return 35 when passed 5*7', () => {
        expect(evaluate('5*7')(5,7)).to.be.equal(35);
    });
    it('should return 5 when passed 6-1', () => {
        expect(evaluate('6-1')(6,1)).to.be.equal(5);
    });
    it('should return 4.5 when passed 9/2', () => {
        expect(evaluate('9/2')(9,2)).to.be.equal(4.5);
    });
    it('should return 256 when passed 2^8', () => {
        expect(evaluate('2^8')(2,8)).to.be.equal(256);
    })
});


//problem 3
//I don't know if this is right, I only wrote tests for the examples
describe('P3 test', () => {
    it('should return [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’] when' +
        'passed `supercalifragilisticexpialidocious`' +
        'str => str.split(/(?=c)/g))', () => {
        expect(fun3('supercalifragilisticexpialidocious', str => str.split(/(?=c)/g).to.be.eql(['super', 'califragilisti', 'cexpialido', 'cious'])));
    })
    it('should return originalString: \'supercalifragilisticexpialidocious\',' +
        ' modifiedString: \'supercAlifrAgilisticexpiAlidocious\',' +
        ' numberReplaced: 3,' +
        ' length: 34, when passed \'supercalifragilisticexpialidocious\'', () => {
        expect(fun3('supercalifragilisticexpialidocious', str => {
            return {
                originalString: str,
                modifiedString: str.split('a').join('A'),
                numberReplaced: (str.match(/a/g, "A") || []).length,
                length: str.length
            }
        })).to.be.eql({
            originalString: 'supercalifragilisticexpialidocious',
            modifiedString: 'supercAlifrAgilisticexpiAlidocious',
            numberReplaced: 3,
            length: 34
        });
    })
})
