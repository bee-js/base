define(['base/util'], function(util) {
  describe('Utils', function() {

    describe('.typeOf', function() {

      context('when string', function() {
        it('should return type', function() {
          var result = util.typeOf('');

          expect(result).to.be.eql('string');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf('', 'string');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf('', 'null');

          expect(result).to.be.false;
        });
      });

      context('when number', function() {
        it('should return type', function() {
          var result = util.typeOf(42);

          expect(result).to.be.eql('number');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf(42, 'number');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf(42, 'string');

          expect(result).to.be.false;
        });
      });

      context('when array', function() {
        it('should return type', function() {
          var result = util.typeOf([]);

          expect(result).to.be.eql('array');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf([], 'array');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf([], 'object');

          expect(result).to.be.false;
        });
      });

      context('when object', function() {
        it('should return type', function() {
          var result = util.typeOf({});

          expect(result).to.be.eql('object');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf({}, 'object');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf({}, 'array');

          expect(result).to.be.false;
        });
      });

      context('when function', function() {
        it('should return type', function() {
          var result = util.typeOf(function() {});

          expect(result).to.be.eql('function');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf(function() {}, 'function');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf(function() {}, 'object');

          expect(result).to.be.false;
        });
      });

      context('when regexp', function() {
        it('should return type', function() {
          var result = util.typeOf(/foo/);

          expect(result).to.be.eql('regexp');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf(/foo/, 'regexp');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf(/foo/, 'string');

          expect(result).to.be.false;
        });
      });

      context('when date', function() {
        it('should return type', function() {
          var result = util.typeOf(new Date());

          expect(result).to.be.eql('date');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf(new Date(), 'date');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf(new Date(), 'object');

          expect(result).to.be.false;
        });
      });

      context('when null', function() {
        it('should return type', function() {
          var result = util.typeOf(null);

          expect(result).to.be.eql('null');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf(null, 'null');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf(null, 'undefined');

          expect(result).to.be.false;
        });
      });

      context('when boolean', function() {
        it('should return type', function() {
          var result = util.typeOf(true);

          expect(result).to.be.eql('boolean');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf(false, 'boolean');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf(false, 'undefined');

          expect(result).to.be.false;
        });
      });

      context('when NaN', function() {
        it('should return type', function() {
          var result = util.typeOf(NaN);

          expect(result).to.be.eql('NaN');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf(NaN, 'NaN');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf(NaN, 'number');

          expect(result).to.be.false;
        });
      });

      context('when undefined', function() {
        it('should return type', function() {
          var result = util.typeOf(undefined);

          expect(result).to.be.eql('undefined');
        });

        it('should compare with valid type', function() {
          var result = util.typeOf(void 0, 'undefined');

          expect(result).to.be.true;
        });

        it('should compare with invalid type', function() {
          var result = util.typeOf(undefined, 'boolean');

          expect(result).to.be.false;
        });
      });

    });
  });
});
