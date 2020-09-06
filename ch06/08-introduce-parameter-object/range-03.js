function readingsOutsideRange(station, range) {
    return station.readings
        .filter(r => r.temp < range.min || r.temp > range.max);
}

class NumberRange {
    constructor(min, max) {
        this._data = { min: min, max: max };
    }
    get min() { return this._data.min; }
    get max() { return this._data.max; }
}

module.exports = { readingsOutsideRange, NumberRange }