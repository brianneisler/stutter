import { anyIsNumber, anyToNumber } from './util'
import deftype from './deftype'
import is from './is'

example(() => {
  const NumberType = deftype('Number', 'A numeric value', {
    class: Number,
    is: anyIsNumber,
    to: anyToNumber
  })
  is(NumberType, 1)
  // => true
})

example(() => {
  const NumberType = deftype('Number', {
    class: Number,
    is: anyIsNumber,
    to: anyToNumber
  })
  is(NumberType, 1)
  // => true
})

example(() => {
  const NumberType = deftype('Number', 'A numeric value')
  is(NumberType, 1)
  // => false
})

example(() => {
  const NumberType = deftype('Number')
  is(NumberType, 1)
  // => false
})
