const { expect, assert } = require('chai');
const {acquireReading} = require('../reading-data');
const {baseCharge} = require('../client1-01');
const {baseCharge: baseCharge2} = require('../client1-02');

const {basicChargeAmount} = require('../client3-01');
const {basicChargeAmount: basicChargeAmount2} = require('../client3-02');
const {basicChargeAmount: basicChargeAmount3} = require('../client3-03');

const {base, taxableCharge} = require('../client2-01');
const {base: base2, taxableCharge: taxableCharge2} = require('../client2-02');
const {base: base3, taxableCharge: taxableCharge3} = require('../client2-03');
const {base: base4, taxableCharge: taxableCharge4} = require('../client2-04');


describe('data', () => {
    it('acquireReading()', () => {
      expect(acquireReading()).to.eql({customer: "ivan", quantity: 10, month: 5, year: 2017});
    });
  });
  
  describe('client-01', () => {
    let aReading;
    beforeEach(() => {
      aReading = acquireReading();
    });
    it('baseCharge is mocking', () => {
      expect(baseCharge).equal(aReading.month * aReading.quantity);
    });
  });
  
  describe('client-02', () => {
    it('base === taxableCharge', () => {
      expect(base).equal(baseCharge);
      expect(base).equal(taxableCharge);
    });
  });
  
  describe('client-03', () => {
    it('basicChargeAmount', () => {
      expect(basicChargeAmount).equal(base);
    });
  
    it('basicChargeAmount should same after encapsulation record', () => {
      expect(basicChargeAmount).equal(basicChargeAmount2);
    });
  
    it('basicChargeAmount should same after moving function into the Reading class', () => {
      expect(basicChargeAmount).equal(basicChargeAmount3);
    });
  });
  
  
  describe('after combining function into class', () => {
    it('client001 baseCharge has the same value', () => {
      expect(baseCharge2).equal(baseCharge);
    });
    it('client002 base has the same value', () => {
      expect(base).equal(base2);
    });
    it('client002 taxableCharge has the same value after extraction function', () => {
      expect(taxableCharge).equal(taxableCharge3);
    });
    it('client002 taxableCharge has the same value after moving function into the Reading class', () => {
      expect(taxableCharge).equal(taxableCharge4);
    });
  });