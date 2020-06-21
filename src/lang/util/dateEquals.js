import anyIsDate from './anyIsDate'
import valueOfIdentical from './valueOfIdentical'

const dateEquals = (date, value) => {
  if (!anyIsDate(value)) {
    return false
  }
  return valueOfIdentical(date, value)
}

export default dateEquals
