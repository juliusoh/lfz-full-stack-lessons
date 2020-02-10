var expect = require('chai').expect;
var reverseWord = require('../reverse-word');

describe.skip('reverseWord(word)', function () {

  it('returns "oof" for "foo"', function () {
    var input = 'foo';
    var output = reverseWord(input);
    expect(output).to.equal('oof');
  });

  it('returns "bar" for "rab"', function () {
    var input = 'rab';
    var output = reverseWord(input);
    expect(output).to.equal('bar');
  });

  it('returns "ezuFgninraeL" for "LearningFuze"', function () {
    var input = 'LearningFuze';
    var output = reverseWord(input);
    expect(output).to.equal('ezuFgninraeL');
  });

  it('returns "JavaScript" for "tpircSavaJ"', function () {
    var input = 'tpircSavaJ';
    var output = reverseWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('returns "racecar" for "racecar"', function () {
    var input = 'racecar';
    var output = reverseWord(input);
    expect(output).to.equal('racecar');
  });

});
