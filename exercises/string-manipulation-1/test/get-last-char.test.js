var expect = require('chai').expect;
var getLastChar = require('../get-last-char');

describe.skip('getLastChar(string)', function () {

  it('returns "e" for "LearningFuze"', function () {
    var input = 'LearningFuze';
    var output = getLastChar(input);
    expect(output).to.equal('e');
  });

  it('returns "l" for "paschal"', function () {
    var input = 'paschal';
    var output = getLastChar(input);
    expect(output).to.equal('l');
  });

  it('returns "L" for "HTML"', function () {
    var input = 'HTML';
    var output = getLastChar(input);
    expect(output).to.equal('L');
  });

  it('returns "e" for "code"', function () {
    var input = 'code';
    var output = getLastChar(input);
    expect(output).to.equal('e');
  });

  it('returns "g" for "String"', function () {
    var input = 'String';
    var output = getLastChar(input);
    expect(output).to.equal('g');
  });

});
