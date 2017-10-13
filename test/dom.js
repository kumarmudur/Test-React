var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];


global.document = jsdom;

global.navigator = {
  userAgent: 'node.js'
};