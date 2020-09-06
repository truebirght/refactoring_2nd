class Book {
    constructor() {
        this._reservations = [];
    }

    addReservation(customer) {
        this._reservations.push(customer);
    }

    get reservationsCount() {
        return this._reservations.length;
    }
}

module.exports = { Book }