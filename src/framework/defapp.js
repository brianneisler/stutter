import DApp from './types/DApp'

export default function defapp(name, def) {
  return DApp({
    ...def,
    name
  })
}
