var should = require('chai').should();
var isNaan = require('../index').isNaan;

describe('isNaan', function() {
  it('should never be Naan', function() {
    isNaan().should.equal(false);
    isNaan(true).should.equal(false);
    isNaan(false).should.equal(false);
    isNaan(null).should.equal(false);
    isNaan(undefined).should.equal(false);
    isNaan('').should.equal(false);
    isNaan('Naan').should.equal(false);
    isNaan(0).should.equal(false);
    isNaan(9).should.equal(false);
    isNaan(isNaan).should.equal(false);
    isNaan(isNaan()).should.equal(false);
  });
});
