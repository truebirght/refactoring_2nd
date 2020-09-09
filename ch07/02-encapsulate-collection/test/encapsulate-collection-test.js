const { expect, assert } = require('chai');
const { Person, Course } = require('../person-01');
const { Person : Person2, Course : Course2 } = require('../person-02');

function readBasicCourseNames(){
    return ["java","python"]
}

describe('person',()=>{
    it('객체 직접 수정',()=>{
        let aPerson = new Person('jh');
        aPerson.courses = readBasicCourseNames().map(name => new Course(name,false));
        expect(2).to.equal(aPerson.courses.length);
    });

    it('객체 캡슐화 후 수정',()=>{
        let aPerson = new Person2('jh');
        for(const name of readBasicCourseNames()){
            aPerson.addCourse(new Course(name,false));
        }
        expect(2).to.equal(aPerson.courses.length);
    });

});