'use strict'

require('dotenv').config()
module.exports = {
  NODE_ENV: '"production"',
  API_KEY: `"${process.env.API_KEY}"`
}
