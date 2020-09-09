const { expect, assert } = require('chai');
const { Order } = require('../order-01')
const { Order: Order2, Priority } = require('../order-02')
const { Order: Order3, Priority: Priority3} = require('../order-03')

describe('order', () => {
    let orders;


    it('기본형을 직접 비교', () => {
        orders = [
            { "priority": "high" },
            { "priority": "low" },
            { "priority": "rush" },
            { "priority": "high" },
            { "priority": "high" }
        ].map(data => new Order(data));

        expect(4).to.equal(orders.filter(o => "high" === o.priority
            || "rush" === o.priority)
            .length);
    });

    it('게터를 사용하여 비교', () => {
        orders = [
            { "priority": "high" },
            { "priority": "low" },
            { "priority": "rush" },
            { "priority": "high" },
            { "priority": "high" }
        ].map(data => new Order2(data));

        expect(4).to.equal(orders.filter(o => "high" === o.priorityString
            || "rush" === o.priorityString)
            .length);
    });

    it('내부 메소드를 사용하여 비교', () => {
        orders = [
            { "priority": "high" },
            { "priority": "low" },
            { "priority": "rush" },
            { "priority": "high" },
            { "priority": "high" }
        ].map(data => new Order3(data));

        expect(4).to.equal(orders.filter(o => o.priority.higherThan(new Priority3("normal")))
            .length);
    });
});