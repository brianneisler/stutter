import def from './def'
import fn from './fn'
import protocol from './protocol'
import { Object, Protocol, String } from './types'

const defprotocol = def(
  'lang.defprotocol',
  {
    description: `Defines a new \`Protocol\` with the given \`name\` and function type \`definitions\`.`,
    since: 'v0.1.0'
  },

  fn(
    [String, String, Object, () => Protocol],
    (name, description, definitions) =>
      def(name, description, protocol(definitions)),

    [String, Object, () => Protocol],
    (name, definitions) => def(name, '', protocol(definitions))
  )
)

export default defprotocol
