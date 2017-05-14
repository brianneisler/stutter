import { defapp, defn, go } from 'stutter'
import { Https, Route } from 'stutter/components'

const makeUppercase = defn((text) => {
  return text.toUpperCase()
})

const upperDirrect = defn(async (req, res) => {
  const { text } = req.query

  const upper = makeUppercase(text) // This is a direct call in code
  res.status(200).send(upper)
})

const upperChannel = fn(function* (req, res) => {
  const { text } = req.query

  const chan = go(makeUppercase, [text]) // This is a direct call in code
  const upper = yield take(chan)
  res.status(200).send(upper)
})

const App = () =>
  <Https>
    <Route
     path='/upperDirrect'
     handler={upperDirrect}/>
  </Https>

export default App

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
