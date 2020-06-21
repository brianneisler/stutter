import anyIsGenerator from '../util/anyIsGenerator'
import deftype from '../deftype'

const Generator = deftype('lang.Generator', 'A type representing a Generator.', {
  is: anyIsGenerator
})

export default Generator
