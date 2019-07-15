const path = require('path')
const express = require('express')

const app = express()
const dir = path.join(__dirname,'../public')

app.use(express.static(dir))

app.get('/help',(req, res)=>{
    res.send({
        name:'Otarin Ohtome',
        age:21
    })
})

app.listen(3000,()=>{
    console.log('El servidor se ha iniciado.')
})