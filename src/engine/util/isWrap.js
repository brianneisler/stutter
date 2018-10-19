import { isObject, has } from '@stutter/core'

const isWrap = (val) => isObject(val) && has(val, 'w')

export default isWrap
