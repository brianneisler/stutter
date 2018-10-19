import { compose, getContext } from 'recompose'
import StoreShape from './StoreShape'

const connect = (selector) => {
  const hoc = compose(
    getContext({
      store: StoreShape
    })
  )
}

import setDisplayName from './setDisplayName'
import wrapDisplayName from './wrapDisplayName'
import createEagerFactory from './createEagerFactory'

const mapProps = propsMapper => BaseComponent => {
  const factory = createEagerFactory(BaseComponent)
  const MapProps = props => factory(propsMapper(props))
  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'mapProps'))(MapProps)
  }
  return MapProps
}

export default mapProps
