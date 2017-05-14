import Immutable from 'immutable'
import { type, types } from '../../'

const CustomType = type('CustomType', {

})

export default function keyed() {
  return {
    'an object': Object,
    'an Immutable.Map': Immutable.Map,
    'an Immutable.OrderedMap': Immutable.OrderedMap,
    'an Immutable.Seq': Immutable.Seq,
    'a CustomType': CustomType
  }
}