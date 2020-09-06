function readingsOutsideRange(station, range) {
    return station.readings
        .filter(r => !range.contains(r.temp));
}

class NumberRange {
    constructor(min, max) {
        this._data = { min: min, max: max };
    }
    get min() { return this._data.min; }
    get max() { return this._data.max; }

    contains(temp) {
        return temp >= this.min && temp <= this.max;
    }
}

module.exports = { readingsOutsideRange, NumberRange }