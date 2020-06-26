const object = {
    database: "A database, is a library with stored data. Like Axios, which is a library for requesting data over the internet",
    API: "An API is a server that does NOT send HTML. Instead, APIs sends only data, often in JSON" ,
    client: "A client is a program that requests data from a server"
}

const keys = Object.keys(object)
console.log("output keys:", keys)

const values = Object.values(object)
console.log("output values:", values)

const entries = Object.entries(object)
console.log("output entries:", entries)

const explanations = entries.map(entry => {
    const [subject, explanation] = entry

    return `An explanation of ${subject}: ${explanation}`
})

console.log("output explanations:", explanations)
