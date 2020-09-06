class Person {
    constructor(data = {}) {
        this._lastName = data.lastName || "Fowler";
        this._firstName = data.firstName || "Martin";
    }
    get firstName() { return this._firstName; }
    set firstName(firstName) { this._firstName = firstName; }
    get lastName() { return this._lastName; }
    set lastName(lastName) { this._lastName = lastName; }
}
module.exports = { Person }
