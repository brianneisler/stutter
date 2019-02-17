// import _Generator from '../util/js/Generator'
import anyIsGenerator from '../util/anyIsGenerator'
import deftype from '../deftype'

const Generator = deftype('Generator', 'A type representing a Generator.', {
  // class: _Generator,
  is: anyIsGenerator
})

export default Generator
