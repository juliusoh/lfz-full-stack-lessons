var expect = require('chai').expect;
var ransomCase = require('../ransom-case');

describe.skip('ransomCase(string)', function () {

  it('returns "fOo" for "foo"', function () {
    var input = 'foo';
    var output = ransomCase(input);
    expect(output).to.equal('fOo');
  });

  it('returns "qUuX" for "QUUX"', function () {
    var input = 'QUUX';
    var output = ransomCase(input);
    expect(output).to.equal('qUuX');
  });

  it('returns "wAlDo" for "WaldO"', function () {
    var input = 'WaldO';
    var output = ransomCase(input);
    expect(output).to.equal('wAlDo');
  });

  it('returns "jAvAsCrIpT" for "JavaScript"', function () {
    var input = 'JavaScript';
    var output = ransomCase(input);
    expect(output).to.equal('jAvAsCrIpT');
  });

  it('returns "lEaRnInGfUzE" for "LearningFuze"', function () {
    var input = 'LearningFuze';
    var output = ransomCase(input);
    expect(output).to.equal('lEaRnInGfUzE');
  });

});
