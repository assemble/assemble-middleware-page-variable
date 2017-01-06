'use strict';

var isObject = require('isobject');
var merge = require('mixin-deep');
var path = require('path');

module.exports = function(app, key) {
  if (!isObject(app) || typeof app.use !== 'function') {
    throw new Error('expected an instance of templates or assemble');
  }

  app.cwd = app.cwd || process.cwd();
  app.options.dest = app.options.dest || app.cwd;

  return function(file, next) {
    if (!key) key = 'page';

    var page = {};
    page.dest = path.resolve(app.cwd, app.options.dest);
    page.cwd = file.cwd;
    page.base = file.base;
    page.path = path.join(page.dest, file.relative);
    page.dirname = path.dirname(page.path);
    page.relative = file.relative;
    page.basename = file.basename;
    page.stem = file.stem;
    page.extname = file.extname;

    var obj = merge({}, page, file.data);
    delete obj[key];
    file.data[key] = obj;

    next();
  };
};
