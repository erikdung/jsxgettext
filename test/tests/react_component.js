"use strict";

var fs = require('fs');
var path = require('path');

var jsxgettext = require('../../lib/jsxgettext');
var utils = require('../utils');

exports['test jsx react component'] = function (assert, cb) {
  var inputFilename = path.join(__dirname, '..', 'inputs', 'react_component.jsx');
  fs.readFile(inputFilename, "utf8", function (err, source) {
    var result = jsxgettext.generate({'inputs/react_component.jsx': source}, {});
    assert.equal(typeof result, 'string', 'result is a string');
    assert.ok(result.length > 0, 'result is not empty');

    var outputFilename = path.join(__dirname, '..', 'outputs', 'react_component.pot');
    utils.compareResultWithFile(result, outputFilename, assert, cb);
  });
};

if (module === require.main) require('test').run(exports);
