# assemble-middleware-page-variable [![NPM version](https://img.shields.io/npm/v/assemble-middleware-page-variable.svg?style=flat)](https://www.npmjs.com/package/assemble-middleware-page-variable) [![NPM monthly downloads](https://img.shields.io/npm/dm/assemble-middleware-page-variable.svg?style=flat)](https://npmjs.org/package/assemble-middleware-page-variable)  [![NPM total downloads](https://img.shields.io/npm/dt/assemble-middleware-page-variable.svg?style=flat)](https://npmjs.org/package/assemble-middleware-page-variable) [![Linux Build Status](https://img.shields.io/travis/assemble/assemble-middleware-page-variable.svg?style=flat&label=Travis)](https://travis-ci.org/assemble/assemble-middleware-page-variable)

> Assemble middleware for adding a `page` variable to the context, with details about the current item being rendered.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save assemble-middleware-page-variable
```

## Usage

This middleware will work with [assemble](https://github.com/assemble/assemble), [verb](https://github.com/verbose/verb), [generate](https://github.com/generate/generate), [update](https://github.com/update/update) or any other node.js application based on the [templates](https://github.com/jonschlinkert/templates) library.

```js
var pageData = require('assemble-middleware-page-variable');
var assemble = require('assemble');
var app = assemble();

app.onLoad(/\.md$/, pageData(app));
var page = app.page('home.md', {
  contents: new Buffer('---\ntitle: Home\n---\n\nThis is {{page.title}}')
});

app.render(page, function(err, view) {
  if (err) return console.log(err);
  console.log(view.contents.toString());
  //=> 'This is Home'
});
```

Then, inside templates you can use the variable like this:

```handlebars
---
title: Home
---

This is the {{page.title}} page.
```

Which would render to:

```html
This is the Home page.
```

## Custom variable

Optionally specify a custom property name to use instead of `page`.

```js
// you don't need to create a custom collection too, this is just an example
app.create('posts');
app.onLoad(/\.md$/, pageData(app, 'post'));

var post = app.post('home.md', {
  contents: new Buffer('---\ntitle: Home\n---\n\nThis is {{post.title}}')
});

app.render(post, function(err, view) {
  if (err) return console.log(err);
  console.log(view.contents.toString());
  //=> 'This is Home'
});
```

## About

### Related projects

* [assemble](https://www.npmjs.com/package/assemble): Get the rocks out of your socks! Assemble makes you fast at creating web projects… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Get the rocks out of your socks! Assemble makes you fast at creating web projects. Assemble is used by thousands of projects for rapid prototyping, creating themes, scaffolds, boilerplates, e-books, UI components, API documentation, blogs, building websit")
* [generate](https://www.npmjs.com/package/generate): Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either.")
* [templates](https://www.npmjs.com/package/templates): System for creating and managing template collections, and rendering templates with any node.js template engine… [more](https://github.com/jonschlinkert/templates) | [homepage](https://github.com/jonschlinkert/templates "System for creating and managing template collections, and rendering templates with any node.js template engine. Can be used as the basis for creating a static site generator or blog framework.")
* [update](https://www.npmjs.com/package/update): Be scalable! Update is a new, open source developer framework and CLI for automating updates… [more](https://github.com/update/update) | [homepage](https://github.com/update/update "Be scalable! Update is a new, open source developer framework and CLI for automating updates of any kind in code projects.")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for avice on opening issues, pull requests, and coding standards.

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.3, on January 05, 2017._