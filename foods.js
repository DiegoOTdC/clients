const countries = {
    NL: "Stamppot",
    France: "Fondue",
    Germany: "Bratwurst"
}

const pretty = JSON.stringify(countries, null, 2)

const parsed = JSON.parse(pretty)

console.log(parsed)