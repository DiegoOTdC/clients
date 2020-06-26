const express = require("express")

const app = express()

app.get(
    "/json",
    (request, response) => {
        const days = {
            yesterday: "I learned about servers!",
            today: "I learned about clients!"
        }

        response.send(days)
    }

)

const port = 3000

app.listen(
    port,
    () => {
        console.log(`Listening on :${port}`)
    }
)