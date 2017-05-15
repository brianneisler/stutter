import keys from '../keys'
import baseFor from './baseFor'

export default function baseForOwn(data, iteratee) {
  return data && baseFor(data, iteratee, keys)
}
