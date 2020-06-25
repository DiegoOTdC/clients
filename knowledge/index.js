const express = require('express')

const app = express()

app.get(
    '/know',
    (request, response) => {
        response.send('I know')
    }
)

const port = 3000

app.listen(
    port,
    () => {
        console.log(`Listening on :${port}`)
    }
)