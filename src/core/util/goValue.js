import isGenerator from '../isGenerator'
import goGenerator from './goGenerator'

export default async function goValue(value) {
  if (isGenerator(value)) {
    return await goGenerator(value)
  }
  return value
}
