import createFnFactory from './createFnFactory'

export default function withContext(context) {
  return (fn) => {
    const factory = createFnFactory(fn)
    return (props) => {
      return factory(props.mergeWith(existingValue => existingValue, { context }))
    }
  }
}
