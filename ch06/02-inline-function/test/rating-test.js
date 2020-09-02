const { expect, assert } = require('chai');
const { rating } = require('../rating-01');
const { rating : rating2 } = require('../rating-02');
const { reportLines } = require('../reportLines-01');
const { reportLines : reportLines2 } = require('../reportLines-02');

describe('rating-01', () => {
    it('should give rating 1 when late deliveries less than or equal to 5 ', () => {
        const aDriverWithLateDeliveriesLessThan5 = {
          numberOfLateDeliveries: 4
        };
    
        expect(rating(aDriverWithLateDeliveriesLessThan5)).to.equal(1);
    
        const aDriverWith5LateDeliveries = {
          numberOfLateDeliveries: 5
        };
    
        expect(rating(aDriverWith5LateDeliveries)).to.equal(1);
      });
});

describe('rating-02', () => {
    it('should give rating 1 when late deliveries less than or equal to 5 ', () => {
        const aDriverWithLateDeliveriesLessThan5 = {
          numberOfLateDeliveries: 4
        };
    
        expect(rating2(aDriverWithLateDeliveriesLessThan5)).to.equal(1);
    
        const aDriverWith5LateDeliveries = {
          numberOfLateDeliveries: 5
        };
    
        expect(rating2(aDriverWith5LateDeliveries)).to.equal(1);
      });
});

describe('reportLines-01', () => {
    let customer;

    beforeEach(function () {
        customer = {
          name: 'jh',
          location: 'korea'
        };
    });

    it('type check', () => {
        assert.typeOf(reportLines(customer), 'array')
    });

    it('length check', () => {
        assert.equal(reportLines(customer).length ,2)
    });

    it('value check', () => {
        assert.equal(reportLines(customer)[0][0], 'name');
        assert.equal(reportLines(customer)[0][1], 'jh');
        assert.equal(reportLines(customer)[1][0], 'location');
        assert.equal(reportLines(customer)[1][1], 'korea');
    });
});

describe('reportLines-02', () => {
    let customer;

    beforeEach(function () {
        customer = {
          name: 'jh',
          location: 'korea'
        };
    });

    it('type check', () => {
        assert.typeOf(reportLines2(customer), 'array')
    });

    it('length check', () => {
        assert.equal(reportLines2(customer).length ,2)
    });

    it('value check', () => {
        assert.equal(reportLines2(customer)[0][0], 'name');
        assert.equal(reportLines2(customer)[0][1], 'jh');
        assert.equal(reportLines2(customer)[1][0], 'location');
        assert.equal(reportLines2(customer)[1][1], 'korea');
    });
});