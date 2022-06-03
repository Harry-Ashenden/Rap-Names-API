const express = require('express')
const app = express()
const PORT = 8000

const rappers =  {
    '21 savage': {
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthAge': 29,
    'birthLocaion': 'London, England'
    },
    'chance the rapper': {
        'birthName': 'Chancelor Bennett',
        'birthAge': 29,
        'birthLocaion': 'Chicago, Illinois'
    },
    'unkown': {
        'birthName': 'unknown',
        'birthAge': 0,
        'birthLocaion': 'unkown'
    },

}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else{
        response.json(rappers['unkown'])
    }
})

app.listen(process.env.PORT || PORT, (response, request) => {
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})