import { LANG } from './defines'
export default function isLang(node) {
  return _.has(node, LANG)
}
