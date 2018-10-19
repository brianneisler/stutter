import { def, go, take} from 'stutter'

const makeUppercase = def.fn((text) => {
  return text.toUpperCase()
})

const upperDirrect = def.fn(async (req, res) => {
  const { text } = req.query

  const upper = makeUppercase(text) // This is a direct call in code
  res.status(200).send(upper)
})

const upperChannel = def.fn(function* (req, res) => {
  const { text } = req.query

  const chan = go(makeUppercase, [text]) // This is a direct call in code
  const upper = yield take(chan)
  res.status(200).send(upper)
})

const exampleapp = def.app(
  https([
    route({
      path: '/upperDirrect',
      handler: upperDirrect
    })
  ])
)

export default exampleapp

// // Take the text parameter passed to this HTTP endpoint and insert it into the
// // Realtime Database under the path /messages/:pushId/original
// const addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const { text } = req.query
//
//   const upper = await makeUppercase(text)
//   res.status(200).send(upper)
// })
//
// export {
//   addMessage,
//   functionTrigger
// }
