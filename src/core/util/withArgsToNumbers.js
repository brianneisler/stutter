import toNumber from '../toNumber'

export default function withArgsToNumbers() {
  return (fn) => (...args) => {
    args = args.map(toNumber)
    return fn(...args)
  }
}
