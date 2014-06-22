// Yetzirah
// Copyright (c) 2014 Akiva Levy <akiva@sixthirteen.co>
// MIT Licensed

'use strict';

// Module dependencies.
var stylus = require('stylus');
var path = require('path');
var nodes = stylus.nodes;
var utils = stylus.utils;

// Return the plugin callback for stylus.
function yetzirah() {
  return function(style){
    style.include(__dirname);
  };
}

// Library version.
exports.version = require(path.join(__dirname, '../package.json')).version;

// Stylus path.
exports.path = __dirname;

// Export module
exports = module.exports = yetzirah;
