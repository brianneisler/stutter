const REGEX_PARAMETERS = /^(?:(?:async\s*)?function\s*\*?\s*[a-zA-Z0-9_$]*\s*\(((?:.|\s)*)\)\s*\{(?:.|\s)*\}\s*)|(?:(?:async\s*)?(?:(?:\(((?:.|\s)*)\))|(?:([a-zA-Z$_][a-zA-Z0-9$_]*)))\s*=>(?:.|\s)*)$/

export default REGEX_PARAMETERS
