import { LANG } from './defines'

export default function lang(object) {
  return {
    [LANG]: true,
    ...object
  }
}
