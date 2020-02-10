/* global expect, sinon, tail */

describe('tail(array)', function () {

  beforeEach(function () {
    expect(tail).to.be.a('function');
  });

  it('returns the last two values of ["foo", "bar", "baz"]', function () {
    var input = noCheating(['foo', 'bar', 'baz']);
    var output = tail(input);
    expect(output).to.deep.equal(['bar', 'baz']);
  });

  it('returns the last five values of [1, 2, 3, 4, 5, 6]', function () {
    var input = noCheating([1, 2, 3, 4, 5, 6]);
    var output = tail(input);
    expect(output).to.deep.equal([2, 3, 4, 5, 6]);
  });

  it('returns the last three values of [true, false, false, true]', function () {
    var input = noCheating([true, false, false, true]);
    var output = tail(input);
    expect(output).to.deep.equal([false, false, true]);
  });

  it('returns [] (empty array) for []', function () {
    var input = noCheating([]);
    var output = tail(input);
    expect(output).to.deep.equal([]);
  });

});

function noCheating(array) {
  sinon.stub(array, 'slice').throws(
    'No Cheating!',
    'Do not use Array.prototype.slice in your implementation!'
  );
  sinon.stub(array, 'splice').throws(
    'No Cheating!',
    'Do not use Array.prototype.splice in your implementation!'
  );
  return array;
}
