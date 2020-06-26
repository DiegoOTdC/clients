const object = {
    database: "A database, is a library with stored data. Like Axios, which is a library for requesting data over the internet",
    API: "And API is a server that does NOT send HTML. Instead, APIs sends only data, often in JSON" ,
    client: "Client is a program that requests data from a server"
}

const output = Object.keys(object)

console.log(output)

const output2 = Object.values(object)

console.log(output2)