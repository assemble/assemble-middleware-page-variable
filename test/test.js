'use strict';

require('mocha');
var assert = require('assert');
var pageData = require('..');

describe('assemble-middleware-page-variable', function() {
  it('should export a function', function() {
    assert.equal(typeof pageData, 'function');
  });

  it('should expose `page` on the context', function(cb) {
    var assemble = require('assemble');
    var app = assemble();

    app.onLoad(/\.md$/, pageData(app));
    var page = app.page('home.md', {content: '---\ntitle: Home\n---\n\nThis is {{page.title}}'});
    app.render(page, function(err, view) {
      if (err) return cb(err);
      assert.equal(view.content, 'This is Home');
      cb();
    });
  });

  it('should expose `post` on the context', function(cb) {
    var assemble = require('assemble');
    var app = assemble();
    app.create('posts');

    app.onLoad(/\.md$/, pageData(app, 'post'));
    var post = app.post('home.md', {content: '---\ntitle: Home\n---\n\nThis is {{post.title}}'});
    app.render(post, function(err, view) {
      if (err) return cb(err);
      assert.equal(view.content, 'This is Home');
      cb();
    });
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      pageData();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected an instance of templates or assemble');
      cb();
    }
  });
});
