import { type, flow, isFunction, map, push, set, update, types } from 'mudash'
import go from './go'
import takeAll from './takeAll'


const functions = require('firebase-functions')


import { join, type, get, im, set, types } from 'mudash'
// import uuid from 'uuid/v1'
import md5 from 'md5'
import admin from 'firebase-admin'
import go from './go'


admin.initializeApp(functions.config().firebase)
const db = admin.database()



const functionTrigger = functions.database.ref('/functions/{fnId}/calls/{callId}')
  .onWrite(async (event) => {
    if (event.data.previous.exists()) {
      return
    }
    if (!event.data.exists()) {
      return
    }
    const data = event.data.val()
    const { fnId, callId } = event.params
    try {
      console.log('function data:', data, ' fnId:', fnId, ' callId:', callId)
      const dfn = get(dfns, fnId)
      console.log('dfn:', dfn)
      const result = await go(data.args, dfn)
      console.log('go resolved')
      await db.ref(`/functions/${fnId}/responses/${callId}`).set({
        result
      })
    } catch(error) {
      console.log('error occurred:', error)
      await db.ref(`/functions/${fnId}/responses/${callId}`).set({
        error: {
          message: error.message,
          stack: error.stack
        }
      })
    }
  })


const Stutter = type('Stutter', {

  cli: types.Object,
  modules: types.Object,
  options: types.Object,

  start(obj) {

    // TODO BRN: Build execution channel
    //obj.init()
    go([], init)

    obj.cli
      .delimiter('stutter$')
      .show()
  }
})

function* init() {
  yield [
    takeAll(LOG, handleLog),
    takeAll(ERROR, handleError)
  ]
}

function handleLog(event) {
  admin.database().ref(`/logs`).push({
    message: args
  })
}

export default Stutter
