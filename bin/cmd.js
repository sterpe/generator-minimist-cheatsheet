#!/usr/bin/env node
var args = require('../lib/minimist-cheatsheet')({
  string: 'lang',
  boolean: 'pager',
  alias: { h: 'help', v: 'version' }
});
