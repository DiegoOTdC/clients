const express = require('express')

const app = express()

app.get(
    '/know/:subject',
    (request, response) => {
        message = `I know ${request.params.subject}`
        response.send(message)
    }
)

const port = 3000

app.listen(
    port,
    () => {
        console.log(`Listening on :${port}`)
    }
)