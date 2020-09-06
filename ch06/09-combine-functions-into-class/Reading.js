const {baseRate} = require('./util');

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {return this._customer;}
  get quantity() {return this._quantity;}
  get month() {return this._month;}
  get year() {return this._year;}
  
  get baseCharge() {  // 기본 요금 계산 함수
    return baseRate(this.month, this.year) * this.quantity;
  }
  get taxableCharge() {  // 기본 요금 계산 함수
    return Math.max(0, this.baseCharge - this.taxThreshold(this.year));
  }
  taxThreshold(y) { return 0; }
}

module.exports = {Reading}