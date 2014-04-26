define(['base/util'], function(util) {
  describe('Utils', function() {

    describe('.cast', function() {

      context('to string', function() {

        context('number', function() {
          it('converts to int string', function() {
            expect(util.cast(2, 'string')).to.be.eql('2');
          });

          it('converts to float string', function() {
            expect(util.cast(2.3, 'string')).to.be.eql('2.3');
          });
        });

        context('boolean', function() {
          it('converts to `true` string', function() {
            expect(util.cast(true, 'string')).to.be.eql('true');
          });

          it('converts to `false` string', function() {
            expect(util.cast(false, 'string')).to.be.eql('false');
          });
        });

        context('regexp', function() {
          it('represents as is', function() {
            expect(util.cast(/(\w)/, 'string')).to.be.eq('/(\\w)/');
          });
        });

        context('array', function() {
          it('converts empty array to empty string', function() {
            expect(util.cast([], 'string')).to.be.eql('');
          });

          it('joins array values', function() {
            expect(util.cast([1, 'foo'], 'string')).to.be.eql('1,foo');
          });
        });

        context('date', function() {
          it('formats local date string', function() {
            var date = new Date('10 May 1986');

            expect(util.cast(date, 'string')).to.contain('Sat May 10 1986');
          });
        });
      });

      context('to number', function() {
        context('string', function() {
          it('integer string', function() {
            expect(util.cast('42', 'number')).to.be.eql(42);
          });

          it('float string', function() {
            expect(util.cast('3.14', 'number')).to.be.eql(3.14);
          });

          it('not-number string', function() {
            expect(util.cast('foo', 'number')).to.be.NaN;
          });
        });

        context('boolean', function() {
          it('convert true to 1', function() {
            expect(util.cast(true, 'number')).to.be.eql(1);
          });

          it('convert false to 0', function() {
            expect(util.cast(false, 'number')).to.be.eql(0);
          });
        });

        context('regexp', function() {
          it('not a number', function() {
            expect(util.cast(/\w/, 'number')).to.be.NaN;
          });
        });

        context('array', function() {
          it('converts empty array to 0', function() {
            expect(util.cast([], 'number')).to.be.eql(0);
          });

          it('converts array with one integer to integer', function() {
            expect(util.cast([5], 'number')).to.be.eql(5);
          });

          it('converts array with one integer string to integer', function() {
            expect(util.cast(['5'], 'number')).to.be.eql(5);
          });

          it('converts array with one string to NaN', function() {
            expect(util.cast(['foo'], 'number')).to.be.NaN;
          });

          it('converts array with two elements to NaN', function() {
            expect(util.cast([1, 2], 'number')).to.be.NaN;
          });
        });

        context('date', function() {
          it('converts date to unix timestamp', function() {
            var date = new Date('10 May 1986 00:00:00 UTC');

            expect(util.cast(date, 'number')).to.be.eql(516067200000);
          });
        });
      });

      context('to boolean', function() {
        context('string', function() {

        });

        context('number', function() {

        });

        context('boolean', function() {

        });

        context('regexp', function() {

        });

        context('array', function() {

        });

        context('date', function() {

        });
      });

      context('to regexp', function() {
        context('string', function() {

        });

        context('number', function() {

        });

        context('boolean', function() {

        });

        context('regexp', function() {

        });

        context('array', function() {

        });

        context('date', function() {

        });
      });

      context('to array', function() {
        context('string', function() {

        });

        context('number', function() {

        });

        context('boolean', function() {

        });

        context('regexp', function() {

        });

        context('array', function() {

        });

        context('date', function() {

        });
      });

      context('to date', function() {
        context('string', function() {

        });

        context('number', function() {

        });

        context('boolean', function() {

        });

        context('regexp', function() {

        });

        context('array', function() {

        });

        context('date', function() {

        });
      });

    });

  });
});
