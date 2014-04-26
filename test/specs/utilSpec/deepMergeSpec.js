define(['base/util'], function(util) {
  describe('Utils', function() {

    describe('.deepMerge', function() {
      it('should deeply merge two objects', function() {
        var a = {
              a: 1,
              obj: { a: 'bar', b: [3, 4], c: 'foo' },
              arr: [2, { c: 'baz' } ]
            },
            b = {
              b: 2,
              obj: { c: 'baz', b: [5] },
              arr: [3, { d: 'foo' }]
            },
            result = util.deepMerge(a, b),
            expected = {
              a: 1,
              b: 2,
              obj: {
                a: 'bar', b: [3, 4, 5], c: 'baz'
              },
              arr: [2, { c: 'baz', d: 'foo' }, 3]
            };

        expect(result).to.deep.eql(expected);
      });

      it('should merge object into array', function() {
        var a = [1, 2, 3],
            b = { a: 'b' },
            result = util.deepMerge(a, b);

        expect(result).to.be.eql({0: 1, 1: 2, 2: 3, a: 'b'});
      });

      it('should not mutate target by default', function() {
        var a = { a: 'b' },
            b = { b: 'c' };

        util.deepMerge(a, b);

        expect(a).to.be.equal(a);
      });

      it('should mutate target if needed', function() {
        var a = { a: 'b' },
            b = { b: 'c' };

        util.deepMerge(a, b, true);

        expect(a).to.be.eql({ a: 'b', b: 'c' });
      });
    });

  });
});
