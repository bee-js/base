# beejs/base

Modular javascript tools: base package

* [![Build Status](https://travis-ci.org/bee-js/base.svg?branch=master)](https://travis-ci.org/bee-js/base)

## Requirements

First, you should have any AMD-compatible loader/builder, for example: [requirejs](http://requirejs.org/). Builds for other package systems will be available soon.

If you plan to support non-ES5 environment, you will need some ES5 polyfills like [es5-shim](https://github.com/es-shims/es5-shim) or [polyfill.io](https://polyfill.io)

## Components

### base/util

Util module is a set of support tools. It provides next functions:

* `merge` - simply merge two objects
* `deepMerge`- deeply merge two objects (slower)
* `typeOf` - fixed typeof, get the real type of objects
* `cast` - simple typecasting
* `strftime` - format date to string with POSIX-like strftime directives

### base/promise

Promises A+ 1.1 implementation.

### base/event (soon)

DOM-like events for any object.

### base/querystring

Full featured querystring parser/dumper
