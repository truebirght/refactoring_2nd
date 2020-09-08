const { expect, assert } = require('chai');
const { organization } = require('../organization-01');
const { getRawDataOfOrganization } = require('../organization-02');
const { getOrganization } = require('../organization-03');

const { compareUsage,  setUsage} = require('../customerData-01');
const { compareUsage : compareUsage2,  setUsage: setUsage2} = require('../customerData-02');
const { compareUsage : compareUsage3,  setUsage: setUsage3} = require('../customerData-03');
const { compareUsage : compareUsage4,  setUsage: setUsage4} = require('../customerData-04');

describe('organization', () => {
    let record;
    beforeEach(()=>{
        record = {name: "Acme Gooseberries", country: "GB"};
    })
    
    it('레코드와 상수값 비교',() =>{
        expect(organization.name).to.equal(record.name);
        expect(organization.contry).to.equal(record.contry);
        organization.name = "애크미 구스베리";
        expect(organization.name).to.equal("애크미 구스베리");
    });

    it('캡슐화된 변수와 상수값 비교',() =>{
        expect(getRawDataOfOrganization().name).to.equal(record.name);
        expect(getRawDataOfOrganization().contry).to.equal(record.contry);
        getRawDataOfOrganization().name = "애크미 구스베리";
        expect(getRawDataOfOrganization().name).to.equal("애크미 구스베리");
    });

    it('객체화된 레코드와 상수값 비교',() =>{
        expect(getOrganization().name).to.equal(record.name);
        expect(getOrganization().contry).to.equal(record.contry);
        getOrganization().name = "애크미 구스베리";
        expect(getOrganization().name).to.equal("애크미 구스베리");
    });
})

describe('customerData',()=>{
    it('중첩레코드 사용량 비교', ()=>{
        expect( -20 ).to.equal(compareUsage("1920","2016","1").change);
        expect(  50 ).to.equal(compareUsage("1920","2016","1").laterAmount);
        //TODO ::: 이 테스트 이후 공용으로 사용되는 값으로 인해서 나머지 테스트가 실패함
        //setUsage("1920","2016","1", 70);
        //expect( 0 ).to.equal(compareUsage("1920","2016","1").change);
    });

    it('중첩레코드 변수 캡슐화 사용량 비교', ()=>{
        expect( -20 ).to.equal(compareUsage2("1920","2016","1").change);
        expect(  50 ).to.equal(compareUsage2("1920","2016","1").laterAmount);
    })

    it('객체화된 중첩레코드 변수 캡슐화 사용량 비교', ()=>{
        expect( -20 ).to.equal(compareUsage3("1920","2016","1").change);
        expect(  50 ).to.equal(compareUsage3("1920","2016","1").laterAmount);
    });

    it('객체화된 중첩레코드 변수 캡슐화 및 게터세터 사용량 비교', ()=>{
        expect( -20 ).to.equal(compareUsage3("1920","2016","1").change);
        expect(  50 ).to.equal(compareUsage3("1920","2016","1").laterAmount);
    })
})