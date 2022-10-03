
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./scryll.cjs.production.min.js')
} else {
  module.exports = require('./scryll.cjs.development.js')
}
