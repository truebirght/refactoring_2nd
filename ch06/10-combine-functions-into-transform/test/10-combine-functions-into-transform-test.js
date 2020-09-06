const { expect, assert } = require('chai');
const {acquireReading} = require('../reading-data');
const {enrichReading} = require('../util-01');
const {basicChargeAmount} = require('../client3-01');
const {basicChargeAmount: basicChargeAmount2} = require('../client3-02');
const {basicChargeAmount: basicChargeAmount3} = require('../client3-03');
const {baseCharge} = require('../client1-01');
const {baseCharge: baseCharge2} = require('../client1-02');
const {base, taxableCharge} = require('../client2-01');
const {base: base2, taxableCharge: taxableCharge2} = require('../client2-02');
const {taxableCharge: taxableCharge3} = require('../client2-03');

describe('data', () => {
  it('acquireReading()', () => {
    expect(acquireReading()).to.eql({customer: "ivan", quantity: 10, month: 5, year: 2017});
  });
});

describe('util', () => {
  it('enrichReading()', () => {
    expect(acquireReading()).to.eql({customer: "ivan", quantity: 10, month: 5, year: 2017});
    expect(enrichReading(acquireReading())).to.eql({customer: "ivan", quantity: 10, month: 5, year: 2017});
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
  it('baseCharge has the same value using enrichReading', () => {
    expect(baseCharge).equal(baseCharge2);
  });
});

describe('client-02', () => {
  let aReading;
  beforeEach(() => {
    aReading = acquireReading();
  });
  it('base is mocking', () => {
    expect(base).equal(aReading.month * aReading.quantity);
  });
  it('baseCharge has the same value using enrichReading', () => {
    expect(base).equal(base2);
  });
  it('taxableCharge has the same value using enrichReading', () => {
    expect(taxableCharge).equal(taxableCharge2);
  });
  it('taxableCharge has the same value after combining funtion into transform', () => {
    expect(taxableCharge).equal(taxableCharge3);
  });
});

describe('client-03', () => {
    let aReading;
    beforeEach(() => {
      aReading = acquireReading();
    });
    it('basicChargeAmount is mocking', () => {
      expect(basicChargeAmount).equal(aReading.month * aReading.quantity);
    });
    it('basicChargeAmount has the same value using enrichReading', () => {
      expect(basicChargeAmount).equal(basicChargeAmount2);
    });
    it('basicChargeAmount has the same value after combining funtion into transform', () => {
      expect(basicChargeAmount).equal(basicChargeAmount3);
    });
  });