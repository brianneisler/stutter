import createFnFactory from './createFnFactory'

export default function withMapProps(propsMapper) {
  return (fn) => {
    const factory = createFnFactory(fn)
    const mapPropsFn = (props) => factory(propsMapper(props))
    // if (process.env.NODE_ENV !== 'production') {
    //   return setDisplayName(wrapDisplayName(BaseComponent, 'mapProps'))(MapProps)
    // }
    return mapPropsFn
  }
}
