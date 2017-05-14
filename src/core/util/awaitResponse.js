const awaitResponse = (fnId, callId) => {
  return new Promise((resolve, reject) => {
    const responseRef = db.ref(`/functions/${fnId}/responses/${callId}`)
    responseRef.on('value', (snap) => {
      if (!snap.exists()) {
        return;
      }
      responseRef.off()
      const response = snap.val()
      if (response.error) {
        return reject(response.error)
      }
      return resolve(response.result)
    })
  })
}

export default awaitResponse
