const geocode = require('./utils/geocode.js')
const weathercode = require('./utils/weather.js')
const chalk = require('chalk')

const errorMsg = chalk.bold.bgHex('#9E31E0')
const okMsg = chalk.bold.bgHex('#21885B')

geocode('Comodoro Rivadavia Chubut', (error,data)=>{
    if(error){
        console.log(errorMsg(error))
    } else {
        console.log(okMsg('Ubicación:' + data.ubic))
        weathercode(data.latitude,data.longitude,
    (error, data)=>{
        if(error){
            console.log(error)
        } else {
            console.log(okMsg('Estado: ' + data.state))
            console.log(okMsg('Temperatura: ' + data.temperature + 'C'))
            console.log(okMsg('Probabilidades de lluvia: ' + data.precip + '%'))
        }
    }
)
    }
})


