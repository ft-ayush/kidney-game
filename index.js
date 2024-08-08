const zod = require('zod')
const express = require('express')
const app = express()

user = {name: 'john', kidneys: [{isHealthy: false}]}

app.use(express.json())

app.get('/', (req,res) => {
    totalKidneys = user.kidneys.length
    totalHealthyKidneys = 0
    totalUnhealthyKidneys = 0
    user.kidneys.forEach((x) => {x.isHealthy?++totalHealthyKidneys:++totalUnhealthyKidneys})
    res.json({totalKidneys, totalHealthyKidneys, totalUnhealthyKidneys})
})

app.post('/', (req,res) => {
    user.kidneys.push({isHealthy: req.body.isHealthy})
    res.json({})
})

app.put('/', (req,res) => {
    user.kidneys.forEach((x) => {x.isHealthy = true})
    res.json({})
})

app.delete('/', (req,res) => {
    user.kidneys = user.kidneys.filter((x) => {return x.isHealthy == true})
    res.json({})
})

app.use((err, req, res, next) => {
    res.send('Error!')
})

app.listen(3000)