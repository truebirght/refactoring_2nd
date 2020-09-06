const { expect, assert } = require('chai');
const { circum } = require('../circum-01');
const { circumference } = require('../circum-02');
const { circum: circum2, circumference: circumference2  } = require('../circum-03');
const { Book } = require('../book-01');
const { Book: Book2 } = require('../book-02');
const {inNewEngland} = require('../inNewEngland-01');
const {inNewEngland: inNewEngland2} = require('../inNewEngland-02');
const {inNewEngland: inNewEngland3} = require('../inNewEngland-03');


describe('circum', () => {
    it('circum before refactoring : should calculate circumference given a radius', () => {
        expect(circum(100)).to.equal(628.3185307179587);
    });

    it('after change to circumference : should calculate circumference given a radius', () => {
        expect(circumference(100)).to.equal(628.3185307179587);
    });

    it('after migragation from circum to circumference : both return the same value', () => {
        expect(circum2(100)).to.equal(circumference2(100));
    });

});

describe('Book', () =>{
    
    
    it('Book 함수명 변경', () => {
        const book = new Book();
        expect(book.reservationsCount).to.equal(0);
        book.addReservation({
        name: 'jh',
        title: 'Refactoring 2nd'
        }, false);
        expect(book.reservationsCount).to.equal(1);
    });

    it('Book2 함수명 변경', () => {
        const book2 = new Book2();
        expect(book2.reservationsCount).to.equal(0);
        book2.addReservation({
        name: 'jh',
        title: 'Refactoring 2nd'
        }, false);
        expect(book2.reservationsCount).to.equal(1);
    });

});

describe('inNewEngland', () => {
    it('inNewEngland : before refactoring', () => {
      expect(inNewEngland({address: {state: 'MA'}})).to.be.true;
      expect(inNewEngland({address: {state: 'XX'}})).to.be.false;
    });
  
    it('inNewEngland : after extracting variable', () => {
      expect(inNewEngland2({address: {state: 'MA'}})).to.be.true;
      expect(inNewEngland2({address: {state: 'XX'}})).to.be.false;
    });
  
    it('inNewEngland : after extracting function and inline function', () => {
      expect(inNewEngland3('MA')).to.be.true;
      expect(inNewEngland3('XX')).to.be.false;
    });
  
  });