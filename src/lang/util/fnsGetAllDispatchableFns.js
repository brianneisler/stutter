import ImmutableList from './js/ImmutableList'
import fnGetMeta from './fnGetMeta'

const fnsGetAllDispatchableFns = (fns) => {
  const { size } = fns
  let dispatchable = ImmutableList([])
  for (let idx = 0; idx < size; idx++) {
    const fn = fns.get(idx)
    const meta = fnGetMeta(fn)
    if (meta.dispatcher) {
      dispatchable = dispatchable.concat(
        meta.dispatcher.getAllDispatchableFns()
      )
    } else {
      dispatchable = dispatchable.push(fn)
    }
  }
  return dispatchable
}

export default fnsGetAllDispatchableFns
