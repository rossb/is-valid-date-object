const chai = require('chai');
const expect = chai.expect;

const isValidDateObj = require('./index.js');

describe('isValidDateObj(date)', function() {

	describe('valid Date object', function(){
		it('should return true', function() {

			expect( isValidDateObj( new Date() ) ).to.be.true;
			expect( isValidDateObj( new Date(1472736512198) ) ).to.be.true;
			expect( isValidDateObj( new Date(1999,11,30) ) ).to.be.true;
			expect( isValidDateObj( new Date(2525,8,13,12,30,45) ) ).to.be.true;
			expect( isValidDateObj( new Date(1629,0) ) ).to.be.true;
			expect( isValidDateObj( new Date('2016-02-02') ) ).to.be.true;
			expect( isValidDateObj( new Date(null) ) ).to.be.true;

		});
	});

	describe('non-Date value', function(){
		it('should return false', function() {

			expect( isValidDateObj(3) ).to.be.false;
			expect( isValidDateObj('string') ).to.be.false;
			expect( isValidDateObj([]) ).to.be.false;
			expect( isValidDateObj({}) ).to.be.false;
			expect( isValidDateObj(/regex/) ).to.be.false;
			expect( isValidDateObj(function() {}) ).to.be.false;

		});
	});

	describe('Date object with value "Invalid Date"', function(){
		it('should return false', function() {

			expect( isValidDateObj(new Date('not a date string')) ).to.be.false;
			expect( isValidDateObj(new Date([])) ).to.be.false;
			expect( isValidDateObj(new Date({})) ).to.be.false;
			expect( isValidDateObj(new Date(undefined)) ).to.be.false;
			expect( isValidDateObj(new Date('')) ).to.be.false;

		});
	});

});