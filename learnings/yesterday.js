const axios = require("axios")

async function getJSON (day) {
    try {
        const url = "http://localhost:3000/json"
        const response = await axios.get(url)
        const { data } = response
        const yesterday = data[day]
        console.log(yesterday)

    } catch (error) {
        console.log("Error message:", error.message)
    }
}

getJSON('yesterday')