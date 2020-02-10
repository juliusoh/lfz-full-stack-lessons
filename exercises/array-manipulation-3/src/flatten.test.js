/* global expect, sinon, flatten */

describe('flatten(array)', function () {

  beforeEach(function () {
    expect(flatten).to.be.a('function');
  });

  context('[["foo", "bar"], ["baz", "qux"]]', function () {

    it('returns ["foo", "bar", "baz", "qux"]', function () {
      var input = noCheating([['foo', 'bar'], ['baz', 'qux']]);
      var output = flatten(input);
      expect(output).to.deep.equal(['foo', 'bar', 'baz', 'qux']);
    });

  });

  context('[[1], [2], 3, 4, [5]]', function () {

    it('returns [1, 2, 3, 4, 5]', function () {
      var input = noCheating([[1], [2], 3, 4, [5]]);
      var output = flatten(input);
      expect(output).to.deep.equal([1, 2, 3, 4, 5]);
    });

  });

  context('[false, [true, [false]], [true]]', function () {

    it('returns [false, true, [false], true]', function () {
      var input = noCheating([false, [true, [false]], [true]]);
      var output = flatten(input);
      expect(output).to.deep.equal([false, true, [false], true]);
    });

  });

});

function noCheating(array) {
  sinon.stub(array, 'flat').throws(
    'No Cheating!',
    'Do not use Array.prototype.flat in your implementation!'
  );
  return array;
}
