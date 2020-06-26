const axios = require('axios')

async function getGoogle() {
    try {
        const response = await axios.get('google.com')

        console.log('response test:', response.data)
    }   catch (error)   {
        console.log('error test:', error.message)
    }
}

getGoogle()