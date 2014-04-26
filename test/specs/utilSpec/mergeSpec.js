define(['base/util'], function(util) {
  describe('Utils', function() {

    describe('.merge', function() {
      it('should merge two objects', function() {
        var a = { a: 1, b: 2 },
            b = { b: 3, c: 4 },
            result = util.merge(a, b);

        expect(result).to.deep.eql({ a: 1, b: 3, c: 4});
      });
    });

  });
});
