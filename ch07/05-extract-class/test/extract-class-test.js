const { expect, assert } = require('chai');
const {Person} = require('../person-01');
const {Person : Person2} = require('../person-02');

describe('person', ()=>{
    it('클래스 추출 전', ()=>{
        const aPerson = new Person();
        aPerson.name = "jh";
        aPerson.officeAreaCode = '042';
        aPerson.officeNumber='1234-5670'
        expect('(042) 1234-5670').to.equal(aPerson.telephoneNumber);
    });

    it('클래스 추출 후', ()=>{
        const aPerson = new Person2();
        aPerson.name = "jh";
        aPerson.officeAreaCode = '042';
        aPerson.officeNumber='1234-5670'
        expect('(042) 1234-5670').to.equal(aPerson.telephoneNumber);
    });
});