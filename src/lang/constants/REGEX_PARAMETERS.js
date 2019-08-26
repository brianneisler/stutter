// TODO BRN: For some reason this regex causes the program to go into a never
// ending match.
const REGEX_PARAMETERS = /^(?:(?:async\s*)?function\s*\*?\s*[a-zA-Z0-9_$]*\s*\(([\D\d]*)\)\s*\{[\D\d]*\}\s*)|(?:(?:async\s*)?(?:(?:\(([\D\d]*)\))|(?:([a-zA-Z$_][a-zA-Z0-9$_]*)))\s*=>[\D\d]*)$/

export default REGEX_PARAMETERS
