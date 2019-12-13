import _Promise from '../util/js/Promise'
import anyIsPromise from '../util/anyIsPromise'
import anyToPromise from '../util/anyToPromise'
import deftype from '../deftype'

const Promise = deftype('lang.Promise', 'A type representing a Promise.', {
  class: _Promise,
  is: anyIsPromise,
  to: anyToPromise
})

export default Promise
