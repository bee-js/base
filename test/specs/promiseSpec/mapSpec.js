define(['base/promise'], function(Promise) {
  'use strict';

  var emptyArray = [],
      valArray   = [1, 2, 3];

  describe('.map', function() {
    it('should map empty array', function(done) {
      Promise.map(emptyArray, function(v) {
        return v;
      }).then(function(value) {
        expect(value).to.be.eql(emptyArray);
      }).then(done, expect.fail);
    });

    it('should map array of values', function(done) {
      Promise.map(valArray, function(v) {
        return v * 2;
      }).then(function(values) {
        expect(values).to.be.eql([2, 4, 6]);
      }).then(done, expect.fail);
    });

    it('should map array of promises', function(done) {
      var arr = [Promise.fulfilled(1), Promise.fulfilled(2), Promise.fulfilled(3)];

      Promise.map(arr, function(v) {
        return v + 2;
      }).then(function(values) {
        expect(values).to.be.eql([3, 4, 5]);
      }).then(done, expect.fail);
    });

    it('should map mixed array', function(done) {
      var arr = [1, Promise.fulfilled(2), 3];

      Promise.map(arr, function(v) {
        return v * 3;
      }).then(function(values) {
        expect(values).to.be.eql([3, 6, 9]);
      }).then(done, expect.fail);
    });

    it('iterator should pass additional args', function(done) {
      Promise.map(valArray, function(v, i, array) {
        return array[i] * i;
      }).then(function(values) {
        expect(values).to.be.eql([0, 2, 6]);
      }).then(done, expect.fail);
    });
  });

  describe('#map', function() {
    it('chains with previous result', function(done) {
      Promise.fulfilled([1, Promise.fulfilled(2), 3]).map(function(v) {
        return v * 2;
      }).then(function(values) {
        expect(values).to.be.eql([2, 4, 6]);
      }).then(done, expect.fail);
    });
  });

});
