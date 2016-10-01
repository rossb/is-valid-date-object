const chai = require('chai');
const expect = chai.expect;

const isValidDate = require('./index.js');

describe('isValidDate(date)', function() {

  describe('valid Date object', function(){
    it('should return true', function() {

      expect( isValidDate( new Date() ) ).to.be.true;
      expect( isValidDate( new Date(1472736512198) ) ).to.be.true;
      expect( isValidDate( new Date(1999,11,30) ) ).to.be.true;
      expect( isValidDate( new Date(2525,8,13,12,30,45) ) ).to.be.true;
      expect( isValidDate( new Date(1629,0) ) ).to.be.true;
      expect( isValidDate( new Date('2016-02-02') ) ).to.be.true;
      expect( isValidDate( new Date(null) ) ).to.be.true;

    });
  });

  describe('non-Date value', function(){
    it('should return false', function() {

      expect( isValidDate(3) ).to.be.false;
      expect( isValidDate('string') ).to.be.false;
      expect( isValidDate([]) ).to.be.false;
      expect( isValidDate({}) ).to.be.false;
      expect( isValidDate(/regex/) ).to.be.false;
      expect( isValidDate(function() {}) ).to.be.false;

    });
  });

  describe('Date object with value "Invalid Date"', function(){
    it('should return false', function() {

      expect( isValidDate(new Date('not a date string')) ).to.be.false;
      expect( isValidDate(new Date([])) ).to.be.false;
      expect( isValidDate(new Date({})) ).to.be.false;
      expect( isValidDate(new Date(undefined)) ).to.be.false;
      expect( isValidDate(new Date('')) ).to.be.false;

    });
  });

});