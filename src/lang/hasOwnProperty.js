import defn from './defn'

const hasOwnProperty = defn('lang.hasOwnProperty', {
  description: 'Determine if the Propertied value has the given Property as its own property',
  since: 'v0.2.0'
})

export default hasOwnProperty
