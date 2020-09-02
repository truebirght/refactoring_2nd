const { expect } = require('chai');
const { printOwing } = require('../printOwing-01');
const {  printOwing : printOwing2 } = require('../printOwing-02');
const {  printOwing : printOwing3 } = require('../printOwing-03');
const {  printOwing : printOwing4 } = require('../printOwing-04');

let Clock = {
  today: {
    getFullYear() {
      return 2000;
    },

    getMonth() {
      return 0;
    },

    getDate() {
      return 1;
    }
  }
};

class Console {
  constructor() {
    this._content = "";
  }

  log(content) {
    this._content += content + "\n";
  }

  get content() {
    return this._content;
  }
}

describe('printOwing : 원래 함수', () => {
  it('should print owing', () => {
    let invoice = {
      "orders": [
        {"amount": 1}
      ],
      "customer": "JL"

    };

    let console = new Console();

    let expected = "***********************\n" +
        "**** 고객 채무 ****\n" +
        "***********************\n" +
        "name: JL\n" +
        "amount: 1\n" +
        "due: 2000-1-31\n";

    printOwing(invoice, console, Clock);

    expect(console.content).to.equal(expected);
  });
});

describe('printOwing2 : 출력값 동일확인', () => {
  it('should print owing', () => {
    let invoice = {
      "orders": [
        {"amount": 1}
      ],
      "customer": "JL"

    };

    let oWing1 = new Console();
    let oWing2 = new Console();
    let oWing3 = new Console();

    printOwing(invoice, oWing1, Clock);
    printOwing2(invoice, oWing2, Clock);
    printOwing3(invoice, oWing3, Clock);
    //expect(oWing1.content).to.equal(oWing2.content);
    expect(oWing1.content).to.equal(oWing3.content);
  });
});

describe('printOwing4 : 출력값 동일확인', () => {
  it('should print owing', () => {
    let invoice = {
      "orders": [
        {"amount": 1}
      ],
      "customer": "JL"

    };

    let oWing1 = new Console();
    let oWing2 = new Console();

    printOwing(invoice, oWing1, Clock);
    printOwing4(invoice, oWing2, Clock);
    expect(oWing1.content).to.equal(oWing2.content);
  });
});
