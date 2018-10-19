import goGoable from '../util/goGoable'
import type from '../type'
import Map from './Map'

const Store = type('Store', {

  state: Map,

  dispatch(event, obj) {

  },

  subscribe(listener, obj) {

  }
})

export default Store
