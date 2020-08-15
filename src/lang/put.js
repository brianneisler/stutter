import defn from './defn'

const put = defn('lang.put', {
  description:
    'Puts a value into the target Sequable and returns a Sequable of the same type the new value added',
  since: 'v0.2.0'
})

export default put
