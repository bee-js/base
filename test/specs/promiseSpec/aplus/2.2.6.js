define(function(require) {
  'use strict';

  var Promise = require('base/promise'),
      helpers = require('specs/promiseSpec/aplus/helpers/testThreeCases'),
      testFulfilled = helpers.testFulfilled,
      testRejected  = helpers.testRejected,
      dummy = { dummy: 'dummy' },
      other = { other: 'other' },
      sentinel  = { sentinel: 'sentinel' },
      sentinel2 = { sentinel2: 'sentinel2' },
      sentinel3 = { sentinel3: 'sentinel3' };

  function callbackAggregator(times, ultimateCallback) {
    var soFar = 0;

    return function() {
      if (++soFar === times) ultimateCallback();
    };
  }

  describe('2.2.6: `then` may be called multiple times on the same promise.', function() {

    describe('2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the ' +
             'order of their originating calls to `then`.', function() {

      describe('multiple boring fulfillment handlers', function() {
        testFulfilled(sentinel, function(promise, done) {
          var handler1 = sinon.stub().returns(other),
              handler2 = sinon.stub().returns(other),
              handler3 = sinon.stub().returns(other);

          var spy = sinon.spy();

          promise.then(handler1, spy);
          promise.then(handler2, spy);
          promise.then(handler3, spy);

          promise.then(function(value) {
            expect(value).to.be.equal(sentinel);

            expect(handler1).to.be.calledWith(sentinel);
            expect(handler2).to.be.calledWith(sentinel);
            expect(handler3).to.be.calledWith(sentinel);

            expect(spy).to.not.be.called;

            done();
          });
        });
      });

      describe('multiple fulfillment handlers, one of which throws', function() {
        testFulfilled(sentinel, function(promise, done) {
          var handler1 = sinon.stub().returns(other),
              handler2 = sinon.stub().throws(other),
              handler3 = sinon.stub().returns(other);

          var spy = sinon.spy();

          promise.then(handler1, spy);
          promise.then(handler2, spy);
          promise.then(handler3, spy);

          promise.then(function(value) {
            expect(value).to.be.equal(sentinel);

            expect(handler1).to.be.calledWith(sentinel);
            expect(handler2).to.be.calledWith(sentinel);
            expect(handler3).to.be.calledWith(sentinel);
            expect(spy).to.not.be.called;

            done();
          });
        });
      });

      describe('results in multiple branching chains with their own fulfillment values', function() {
        testFulfilled(dummy, function(promise, done) {
          var semiDone = callbackAggregator(3, done);

          promise.then(function() {
            return sentinel;
          }).then(function(value) {
            expect(value).to.be.equal(sentinel);
            semiDone();
          });

          promise.then(function() {
            throw sentinel2;
          }).then(null, function(reason) {
            expect(reason).to.be.equal(sentinel2);
            semiDone();
          });

          promise.then(function() {
            return sentinel3;
          }).then(function(value) {
            expect(value).to.be.equal(sentinel3);
            semiDone();
          });
        });
      });

      describe('`onFulfilled` handlers are called in the original order', function() {
        testFulfilled(dummy, function(promise, done) {
          var handler1 = sinon.spy(function handler1() {}),
              handler2 = sinon.spy(function handler2() {}),
              handler3 = sinon.spy(function handler3() {});

          promise.then(handler1);
          promise.then(handler2);
          promise.then(handler3);

          promise.then(function() {
            sinon.assert.callOrder(handler1, handler2, handler3); // TODO: replace with BDD assertions

            done();
          });
        });

        describe('even when one handler is added inside another handler', function() {
          testFulfilled(dummy, function(promise, done) {
            var handler1 = sinon.spy(function handler1() {}),
                handler2 = sinon.spy(function handler2() {}),
                handler3 = sinon.spy(function handler3() {});

            promise.then(function() {
              handler1();
              promise.then(handler3);
            });

            promise.then(handler2);

            promise.then(function() {
              // Give implementations a bit of extra time to flush their internal queue, if necessary.
              setTimeout(function() {
                sinon.assert.callOrder(handler1, handler2, handler3); // TODO: replace with BDD assertions
                done();
              }, 15);
            });
          });
        });
      });
    });

    describe('2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the ' +
             'order of their originating calls to `then`.', function() {

      describe('multiple boring rejection handlers', function() {
        testRejected(sentinel, function(promise, done) {
          var handler1 = sinon.stub().returns(other),
              handler2 = sinon.stub().returns(other),
              handler3 = sinon.stub().returns(other);

          var spy = sinon.spy();

          promise.then(spy, handler1);
          promise.then(spy, handler2);
          promise.then(spy, handler3);

          promise.then(null, function(reason) {
            expect(reason).to.be.equal(sentinel);

            expect(handler1).to.be.calledWith(sentinel);
            expect(handler2).to.be.calledWith(sentinel);
            expect(handler3).to.be.calledWith(sentinel);
            expect(spy).to.not.be.called;

            done();
          });
        });
      });

      describe('multiple rejection handlers, one of which throws', function() {
        testRejected(sentinel, function(promise, done) {
          var handler1 = sinon.stub().returns(other),
              handler2 = sinon.stub().throws(other),
              handler3 = sinon.stub().returns(other);

          var spy = sinon.spy();

          promise.then(spy, handler1);
          promise.then(spy, handler2);
          promise.then(spy, handler3);

          promise.then(null, function(reason) {
            expect(reason).to.be.equal(sentinel);

            expect(handler1).to.be.calledWith(sentinel);
            expect(handler2).to.be.calledWith(sentinel);
            expect(handler3).to.be.calledWith(sentinel);
            expect(spy).to.not.be.called;

            done();
          });
        });
      });

      describe('results in multiple branching chains with their own fulfillment values', function() {
        testRejected(sentinel, function(promise, done) {
          var semiDone = callbackAggregator(3, done);

          promise.then(null, function() {
            return sentinel;
          }).then(function(value) {
            expect(value).to.be.equal(sentinel);
            semiDone();
          });

          promise.then(null, function() {
            throw sentinel2;
          }).then(null, function(reason) {
            expect(reason).to.be.equal(sentinel2);
            semiDone();
          });

          promise.then(null, function() {
            return sentinel3;
          }).then(function(value) {
            expect(value).to.be.equal(sentinel3);
            semiDone();
          });
        });
      });

      describe('`onRejected` handlers are called in the original order', function() {
        testRejected(dummy, function(promise, done) {
          var handler1 = sinon.spy(function handler1() {}),
              handler2 = sinon.spy(function handler2() {}),
              handler3 = sinon.spy(function handler3() {});

          promise.then(null, handler1);
          promise.then(null, handler2);
          promise.then(null, handler3);

          promise.then(null, function() {
            sinon.assert.callOrder(handler1, handler2, handler3); // TODO: replace with BDD assertions
            done();
          });
        });

        describe('even when one handler is added inside another handler', function() {
          testRejected(dummy, function(promise, done) {
            var handler1 = sinon.spy(function handler1() {}),
                handler2 = sinon.spy(function handler2() {}),
                handler3 = sinon.spy(function handler3() {});

            promise.then(null, function() {
              handler1();
              promise.then(null, handler3);
            });
            promise.then(null, handler2);

            promise.then(null, function() {
              // Give implementations a bit of extra time to flush their internal queue, if necessary.
              setTimeout(function() {
                sinon.assert.callOrder(handler1, handler2, handler3);
                done();
              }, 15);
            });
          });
        });
      });
    });
  });

});
