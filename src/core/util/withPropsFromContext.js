import withMapProps from './withMapProps'

export default function withPropsFromContext(input) {
  return withMapProps(props => ({
    ...props,
    ...input(props.context, props)
  }))
}
