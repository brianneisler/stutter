const isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function'

export default function hoist(target, source) {
  let keys = Object.getOwnPropertyNames(source)
  if (isGetOwnPropertySymbolsAvailable) {
    keys = keys.concat(Object.getOwnPropertySymbols(source))
  }
  for (var i = 0; i < keys.length; ++i) {
    try {
      target[keys[i]] = source[keys[i]]
    } catch (error) {}
  }
  return target
}
