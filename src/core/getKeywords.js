import _ from 'mudash'
export default function getKeywords(lang) {
  return _.mapValues(lang, (item) => item.keyword)
}
