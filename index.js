'use strict'

var qs = require('qs')
var querystring = require('querystring')


exports.parse = function (str, options) {
  options = init(options)

  if (options.parse.querystring) {
    var o = options.parse.querystring
    return querystring.parse(str, o.sep || null, o.eq || null, o.options)
  }
  else {
    return qs.parse(str, options.parse.qs)
  }
}

exports.stringify = function (obj, options) {
  options = init(options)

  if (options.stringify.querystring) {
    var o = options.stringify.querystring
    return rfc3986(
      querystring.stringify(obj, o.sep || null, o.eq || null, o.options))
  }
  else {
    return qs.stringify(obj, options.stringify.qs)
  }
}

function rfc3986 (str) {
  return str.replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

function init (options) {
  if (!options) {
    return {parse: {qs: {}}, stringify: {qs: {}}}
  }
  if (!options.parse) {
    options.parse = {qs: {}}
  }
  if (!options.stringify) {
    options.stringify = {qs: {}}
  }
  if (!options.parse.qs) {
    options.parse.qs = {}
  }
  if (!options.stringify.qs) {
    options.stringify.qs = {}
  }
  return options
}
