import curry from '../curry'
import _with from '../with'

const withCurry = (arity) => _with((factory, props) => {
  const fn = factory(props)
  return curry(fn, arity)
})

export default withCurry
