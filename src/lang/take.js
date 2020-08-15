import defn from './defn'

const take = defn('lang.take', {
  description:
    'Returns a new Collection of the same type which includes the first amount entries from this Collection.',
  since: 'v0.2.0'
})

export default take
