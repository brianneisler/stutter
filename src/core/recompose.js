import Immutable from 'immutable'
import baseCompose from './util/baseCompose'
import memoize from './memoize'

export default function recompose(...funcs) {
  const enhance = memoize(baseCompose(...funcs))
  const recomposable = function(props) {
    return enhance(Immutable.Map(props))
  }
  recomposable.recompose = enhance
}
