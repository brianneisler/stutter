import anyToName from './anyToName'
import anyToStringTag from './anyToStringTag'

const sourceToString = (source) => `${anyToName(source)}:${anyToStringTag(source)}`

export default sourceToString
