'use strict'
/* global noneFn */

var thunk = require('../thunks.js')()

thunk(function * () {
  // catch error by yourself
  try {
    yield function (callback) { noneFn() }
  } catch (err) {
    console.log('catched a error:', err)
  }

  yield function (callback) { throw new Error('some error') }
})(function (error, res) {
  // catch the second error by Thunk
  console.log(error, res)
})(function * () {
  yield function (callback) { throw new Error('some error2') }
})()
// throw error to system
// Error: some error2...
