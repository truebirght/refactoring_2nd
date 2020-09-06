const { expect, assert } = require('chai');
const { price } = require('../price-01');
const { price : price2} = require('../price-02');
const { Order } = require('../order-01');
const { Order : Order2} = require('../order-01');

describe('price-01', () => {
    beforeEach(function () {
        
    });

    it('물건개수가 50개 미만인경우', () => {
        const anOrder = {
            quantity: 49,
            itemPrice: 1,
  
        };
        expect(price(anOrder)).to.equal(53.9);
    });

    it('물건개수가 50개 이상인경우', () => {
        const anOrder = {
            quantity: 51,
            itemPrice: 1,
  
        };
        expect(price(anOrder)).to.equal(56.1);
    });
});

describe('price-02', () => {
    beforeEach(function () {
        
    });

    it('물건개수가 50개 미만인경우', () => {
        const anOrder = {
            quantity: 49,
            itemPrice: 1,
  
        };
        expect(price2(anOrder)).to.equal(53.9);
    });

    it('물건개수가 50개 이상인경우', () => {
        const anOrder = {
            quantity: 51,
            itemPrice: 1,
  
        };
        expect(price2(anOrder)).to.equal(56.1);
    });
});

describe('order-01', () => {
    beforeEach(function () {
        
    });

    it('물건개수가 50개 미만인경우', () => {
        const anOrder = {
            quantity: 49,
            itemPrice: 1,
  
        };
        expect(new Order(anOrder).price).to.equal(53.9);
    });

    it('물건개수가 50개 이상인경우', () => {
        const anOrder = {
            quantity: 51,
            itemPrice: 1,
  
        };
        expect(new Order(anOrder).price).to.equal(56.1);
    });
});

describe('order-02', () => {
    beforeEach(function () {
        
    });

    it('물건개수가 50개 미만인경우', () => {
        const anOrder = {
            quantity: 49,
            itemPrice: 1,
  
        };
        expect(new Order2(anOrder).price).to.equal(53.9);
    });

    it('물건개수가 50개 이상인경우', () => {
        const anOrder = {
            quantity: 51,
            itemPrice: 1,
  
        };
        expect(new Order2(anOrder).price).to.equal(56.1);
    });
});