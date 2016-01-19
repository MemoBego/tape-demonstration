 # webpack ES6 demo

A small demo project that shows how to use webpack for client-side development in ECMAScript 6.

## Installation

* Install  [node](https://nodejs.org)
* run `npm install`

## Usage

* `npm run watch` to start Webpack in watch mode - will recompile when you change a file.
* open `index.html` in a browser. 
* Change or add files in `es6` folder. `main.js` is the entry point.
* Reload the browser when you have made a change.


## UNIT TESTING

please do the following:

transpile original es6 code to es5 using babel:
$ babel es6/Point.js --out-file es6/compiledPoint.js

ensure that the file tests/pointTest.js is importing the compiled es5 es6/compiledPoint.js
`point = require('../es6/compiledPoint')`

run the unit test
$ tape tests/pointTest.js
