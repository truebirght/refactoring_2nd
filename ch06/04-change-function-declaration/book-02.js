const {assert} = require('chai');

class Book {
    constructor() {
        this._reservations = [];
    }

    addReservation(customer) {
        this.zz_addReservation(customer, false);
    }

    get reservationsCount() {
        return this._reservations.length;
    }

    zz_addReservation(customer, isPriority) {
        assert(isPriority === true || isPriority === false);
        this._reservations.push(customer);
    }
}

module.exports = { Book }