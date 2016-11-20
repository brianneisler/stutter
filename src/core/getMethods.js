import _ from 'mudash'
export default function getMethods() {
  return _.mapValues(lang, (item) => item.method)
}
