var expect = require('chai').expect;
var isUpperCased = require('../is-upper-cased');

describe.skip('isUpperCased(word)', function () {

  it('returns false for "LearningFuze"', function () {
    var input = 'LearningFuze';
    var output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns false for "JavaScript"', function () {
    var input = 'JavaScript';
    var output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns false for "HTML"', function () {
    var input = 'HTML';
    var output = isUpperCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "css"', function () {
    var input = 'css';
    var output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns false for "PHP"', function () {
    var input = 'PHP';
    var output = isUpperCased(input);
    expect(output).to.equal(true);
  });

});
