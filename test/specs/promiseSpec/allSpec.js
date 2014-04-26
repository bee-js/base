define(['base/promise'], function(Promise) {
  'use strict';

  var emptyArray = [],
      valArray   = [1, 2, 3];

  function fail() {
    expect.fail();
  }

  describe('.all', function() {
    it('should resolve empty array', function(done) {
      Promise.all(emptyArray).then(function(value) {
        expect(value).to.be.equal(emptyArray);
      }).then(done, fail);
    });

    it('should resolve array of values', function(done) {
      Promise.all(valArray).then(function(values) {
        expect(values).to.be.equal(valArray);
      }).then(done, fail);
    });

    it('should resolve array of promises', function(done) {
      var arr = [Promise.fulfilled(1), Promise.fulfilled(2), Promise.fulfilled(3)];

      Promise.all(arr).then(function(values) {
        expect(values).to.be.equal([1, 2, 3]);
      }).then(done, fail);
    });

    it('should resolve mixed array', function(done) {
      var arr = [1, Promise.fulfilled(2), 3];

      Promise.all(arr).then(function(values) {
        expect(values).to.be.equal([1, 2, 3]);
      }).then(done, fail);
    });
  });

});
