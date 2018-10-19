import fns from '../fns'
import _with from '../with'

const withFns = (fnsMapper) => _with((factory, props) =>
  factory(fns(props, fnsMapper))
)

export default withFns
