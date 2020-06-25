const makers = ["ferrari", "BMW", "VW"]

function car(maker) {
    const mission = `${maker} makes cars`
    
    return mission
}

const messages = makers.map(car)

console.log(messages)