    isIterateeCall = require('./_isIterateeCall')


export default function withAssigner(assigner) {
  return (data, ...sources) => {
    let index = -1
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer
      length = 1
    }

    while (++index < length) {
      var source = sources[index]
      if (source) {
        data = assigner(data, source, index, customizer)
      }
    }
    return data
  }
}
