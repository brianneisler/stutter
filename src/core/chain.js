import _ from 'mudash'

export default function chain(value, chains) {
  return {
    ...value,
    ..._.mapValues(chains, (method) => _.partialRight(method, value))
  }
}
