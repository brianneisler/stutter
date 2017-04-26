import defn from './defn'

const lt = defn((value, other) => {
  if (!(typeof value == 'string' && typeof other == 'string')) {
    value = +value
    other = +other
  }
  return value < other
})

export default lt
