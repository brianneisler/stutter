import assoc from '../assoc'
import createHelper from './createHelper'
import mapState from './mapState'

const selectModules = (predicate) =>
  mapState((state, ...rest) => _.assoc(
    state,
    { modules: state.modules }
  ))

export default createHelper(getModules, 'getModules')
