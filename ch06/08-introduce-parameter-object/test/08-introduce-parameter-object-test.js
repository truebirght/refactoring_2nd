const { expect, assert } = require('chai');
const { readingsOutsideRange } = require('../range-01');
const { readingsOutsideRange: readingsOutsideRange2 } = require('../range-02');
const { readingsOutsideRange: readingsOutsideRange3, NumberRange } = require('../range-03');
const { readingsOutsideRange: readingsOutsideRange4, NumberRange: NumberRange2 } = require('../range-04');
const { readingsOutsideRange: readingsOutsideRange5, NumberRange: NumberRange3, OperatingPlan } = require('../range-05');

// sample
const station = {
    name: "ZB1",
    readings: [
        { temp: 47, time: "2016-11-10 09:10" },
        { temp: 53, time: "2016-11-10 09:20" },
        { temp: 58, time: "2016-11-10 09:30" },
        { temp: 53, time: "2016-11-10 09:40" },
        { temp: 51, time: "2016-11-10 09:50" },
    ]
};

const operatingPlan = {
    temperatureFloor: 51,
    temperatureCeiling: 53
};

describe('readingsOutsideRange', () => {
    it('should return readings outside range', () => {
        let alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);

        expect(alerts).to.eql([{ temp: 47, time: "2016-11-10 09:10" }, { temp: 58, time: "2016-11-10 09:30" }]);
    });

    it('should return readings outside range : change parameters', () => {

        let alerts = readingsOutsideRange2(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling, null);

        expect(alerts).to.eql([{ temp: 47, time: "2016-11-10 09:10" }, { temp: 58, time: "2016-11-10 09:30" }]);
    });

    it('should return readings outside range : change parameters from values to value object', () => {

        const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
        let alerts = readingsOutsideRange3(station, range);
        expect(alerts).to.eql([{ temp: 47, time: "2016-11-10 09:10" }, { temp: 58, time: "2016-11-10 09:30" }]);
    });

    it('should return readings outside range : move check method into value object class', () => {
        const NumberRange = NumberRange2;

        const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
        let alerts = readingsOutsideRange4(station, range);

        expect(alerts).to.eql([{ temp: 47, time: "2016-11-10 09:10" }, { temp: 58, time: "2016-11-10 09:30" }]);
    });

    it('should return readings outside range : change parameters from values to value object again', () => {
        const NumberRange = NumberRange3;

        const operatingPlan = new OperatingPlan(51, 53);

        const range = new NumberRange(operatingPlan);
        let alerts = readingsOutsideRange5(station, range);

        expect(alerts).to.eql([{ temp: 47, time: "2016-11-10 09:10" }, { temp: 58, time: "2016-11-10 09:30" }]);
    });


});