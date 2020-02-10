var expect = require('chai').expect;
var getFirstChar = require('../get-first-char');

describe.skip('getFirstChar(string)', function () {

  it('returns "L" for "LearningFuze"', function () {
    var input = 'LearningFuze';
    var output = getFirstChar(input);
    expect(output).to.equal('L');
  });

  it('returns "p" for "paschal"', function () {
    var input = 'paschal';
    var output = getFirstChar(input);
    expect(output).to.equal('p');
  });

  it('returns "H" for "HTML"', function () {
    var input = 'HTML';
    var output = getFirstChar(input);
    expect(output).to.equal('H');
  });

  it('returns "c" for "code"', function () {
    var input = 'code';
    var output = getFirstChar(input);
    expect(output).to.equal('c');
  });

  it('returns "S" for "String"', function () {
    var input = 'String';
    var output = getFirstChar(input);
    expect(output).to.equal('S');
  });

});
