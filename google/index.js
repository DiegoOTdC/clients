const axios = require("axios")

async function getGoogle() {
const response = await axios.get('http://google.com')
console.log(response.data)
}

getGoogle()