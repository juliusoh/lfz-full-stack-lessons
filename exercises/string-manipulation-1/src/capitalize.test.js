/* global expect, capitalize */

describe('capitalize(string)', function () {

  beforeEach(function () {
    expect(capitalize).to.be.a('function');
  });

  it('returns "A" for "a"', function () {
    var input = 'a';
    var output = capitalize(input);
    expect(output).to.equal('A');
  });

  it('returns "Link" for "link"', function () {
    var input = 'link';
    var output = capitalize(input);
    expect(output).to.equal('Link');
  });

  it('returns "To" for "tO"', function () {
    var input = 'tO';
    var output = capitalize(input);
    expect(output).to.equal('To');
  });

  it('returns "The" for "ThE"', function () {
    var input = 'ThE';
    var output = capitalize(input);
    expect(output).to.equal('The');
  });

  it('returns "Past" for "pAsT"', function () {
    var input = 'pAsT';
    var output = capitalize(input);
    expect(output).to.equal('Past');
  });

});
