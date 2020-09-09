const { expect, assert } = require('chai');
const {Order} = require('../order-01')
const {Order : Order2} = require('../order-01')
const {Order : Order3} = require('../order-01')

describe('order',()=>{
    const item = {"name" : "mouse", "price" : 1}
    const largeQuantity = 5000;
    const smallQuantity = 100;
    

    it('임시변수 사용',()=>{
        expect(98).to.equal(new Order(smallQuantity, item).price);
        expect(4750).to.equal(new Order(largeQuantity, item).price);
    });

    it('basePrice 질의함수로 변경',()=>{
        expect(98).to.equal(new Order2(smallQuantity, item).price);
        expect(4750).to.equal(new Order2(largeQuantity, item).price);
    });

    it('모두 질의함수로 변경',()=>{
        expect(98).to.equal(new Order3(smallQuantity, item).price);
        expect(4750).to.equal(new Order3(largeQuantity, item).price);
    });
})