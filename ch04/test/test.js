const Province = require('../Province');
const {assert, expect} = require('chai');

function sampleProvinceData() {
  return {
    name: "Asia",
    producers: [
      {name: "Byzantium", cost: 10, production: 9},
      {name: "Attalia", cost: 12, production: 10},
      {name: "Sinope", cost: 10, production: 6},
    ],
    demand: 30,
    price: 20
  };
}

describe('province', function() {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  it('shortfall', function() {
    assert.equal(asia.shortfall, 5);
  });
  it('shortfall', function() {
    expect(asia.shortfall).equal(asia.demand - asia.totalProduction);
    expect(asia.shortfall).equal(5);
  });
  it('totalProduction', function () {
    assert.equal(asia.totalProduction, 25);
  });
  it('satisfiedDemand', function() {
    expect(asia.satisfiedDemand).equal(Math.min(asia.totalProduction, asia.demand));
    expect(asia.satisfiedDemand).equal(asia.totalProduction);
    expect(asia.satisfiedDemand).equal(25);
  });
  it('demandValue', function() {
    expect(asia.demandValue).equal(asia.satisfiedDemand * asia.price);
    expect(asia.demandValue).equal(25 * 20);
    expect(asia.demandValue).equal(500);
  });
  it('demandCost', function() {
    expect(asia.demandCost).equal((10*9)+(10*6)+(12*10));
    expect(asia.demandCost).equal(270);
  });
  it('profit', function() {
    expect(asia.profit).equal(asia.demandValue - asia.demandCost);
    expect(asia.profit).equal(500 - 270);
  });

  it('change production', function() {
    const totalProduction = asia.totalProduction;
    asia.producers[0].production = 20;
    expect(asia.totalProduction).equal(totalProduction + 11);
    // expect(asia.shortfall).equal(asia.demand - asia.totalProduction)
    // asia.totalProduction += 11
    // 5 - 11 = -6
    expect(asia.shortfall).equal(-6);

    // expect(asia.profit).equal(asia.demandValue - asia.demandCost);
    //  demandValue : expect(asia.demandValue).equal(asia.satisfiedDemand * asia.price);
    //    satisfiedDemand : expect(asia.satisfiedDemand).equal(Math.min(asia.totalProduction, asia.demand));
    //    satisfiedDemand : expect(asia.satisfiedDemand).equal(Math.min(36, 30));
    //  demandValue : expect(asia.demandValue).equal(30 * 20);
    //  demandCost : expect(asia.demandCost).equal((10*20)+(10*6)+(12*4));
    // expect(asia.profit).equal(600 - 308);
    expect(asia.profit).equal(292);
  });
});

describe('no producers', function() {
  let noProducers;
  beforeEach(function () {
    const data = {
      name: "No proudcers",
      producers: [],
      demand: 30,
      price: 20
    };
    noProducers = new Province(data);
  });
  it('shortfall', function () {
    expect(noProducers.shortfall).equal(30);
  });
  it('profit', function () {
    expect(noProducers.profit).equal(0);
  });
});

describe('province', function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  it('zero demand', function() {
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  });
  it('negative demand', function() {
    asia.demand = -1;
    expect(asia.shortfall).equal(-26);
    expect(asia.profit).equal(-10);
  }); // TODO : profit은 음수가 될 수 없도록 제약조건 추
  it('empty string demand', function() {
    asia.demand = "";
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});


describe('string for producers', function () {
  it('', function() {
    const data = {
      name: "String proudcers",
      producers: "",
      demand: 30,
      price: 20
    };
    // const prov = new Province(data);
    // expect(prov.shortfall).equal(0);
    // expect(()=>new Province(data)).not.to.throw();
    expect(()=>new Province(data)).to.throw();
  });
});