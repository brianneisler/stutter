import withMapProps from './withMapProps'

export default function withProps(input) {
  const hofn = withMapProps(props => ({
    ...props,
    ...(typeof input === 'function' ? input(props) : input)
  }))
  // if (process.env.NODE_ENV !== 'production') {
  //   return BaseComponent =>
  //     setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(
  //       hoc(BaseComponent)
  //     )
  // }
  return hofn
}
