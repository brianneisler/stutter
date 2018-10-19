import { NAN } from './util/constants'
import reIsBadHex from './util/reIsBadHex'
import reIsBinary from './util/reIsBinary'
import reIsOctal from './util/reIsOctal'
import reTrim from './util/reTrim'
import withFns from './util/withFns'
import withPropsFromContext from './withPropsFromContext'
import expect from './expect'
import fn from './fn'
import isObject from './isObject'
import isSymbol from './isSymbol'
import recompose from './recompose'
import satisfies from './satisfies'


const enhance = recompose(
  withPropsFromContext((context) => ({
    parseInt: context.parseInt
  })),
  withFns({
    expect,
    isObject,
    isSymbol,
    satisfies
  })
)

const toNumber = enhance(({ expect, isObject, isSymbol, parseInt, satisfies }) => fn((data) => {
  if (typeof data == 'number') {
    return data
  }
  expect(
    !isSymbol(data),
    `${data} is a Symbol and cannot be converted in to a number`
  )
  if (isObject(data)) {
    const other = typeof data.valueOf == 'function' ? data.valueOf() : data
    data = isObject(other) ? `${other}` : other
  }
  if (typeof data != 'string') {
    return data === 0 ? data : +data
  }
  data = data.replace(reTrim, '')
  const isBinary = reIsBinary.test(data)
  return (isBinary || reIsOctal.test(data))
    ? parseInt(data.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(data) ? NAN : +data)
}))

export default toNumber
