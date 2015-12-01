
# @request/qs

Wrapper for the [qs][qs] and [querystring][querystring] modules.

> See [@request/core][request-core] for more details.


## defaults

By default `@request/qs` uses the [qs][qs] module:

```js
var qs = require('@request/qs')

qs.parse(str)
qs.stringify(obj)
```


## qs options

```js
var qs = require('@request/qs')

var options = {
  // parse options
  parse: {
    qs: {sep: ';', eq: ':'}
  },
  // stringify options
  stringify: {
    qs: {sep: ';', eq: ':'}
  }
}

qs.parse(str, options)
qs.stringify(obj, options)
```


## using querystring

To use the [querystring][querystring] module instead, set the `parse` and `stringify` option keys to `querystring`:

```js
var qs = require('@request/qs')

var options = {
  parse: {querystring: {}},
  stringify: {querystring: {}}
}

qs.parse(str, options)
qs.stringify(obj, options)
```


## querystring options

Here `sep` and `eq` are the second and third argument for the [querystring's][querystring] `parse` and `stringify` methods. The `options` key is the forth object argument:

```js
var qs = require('@request/qs')

var options = {
  // parse options
  parse: {
    querystring: {sep: ';', eq: ':', options: {}}
  },
  // stringify options
  stringify: {
    querystring: {sep: ';', eq: ':', options: {}}
  }
}

qs.parse(str, options)
qs.stringify(obj, options)
```

> The stringified result is [RFC3986][rfc3986] encoded.


## Notice

This module may contain code snippets initially implemented in [request][request] by [request contributors][request-contributors].


  [request]: https://github.com/request/request
  [request-contributors]: https://github.com/request/request/graphs/contributors
  [qs]: https://www.npmjs.com/package/qs
  [querystring]: https://nodejs.org/api/querystring.html
  [rfc3986]: https://www.ietf.org/rfc/rfc3986.txt
  [request-core]: https://github.com/request/core
