const express = require('express')
const hbs = require('hbs')

const PORT = 3000
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about-us', (req, res) => {
    res.render('about')
})

app.get('/works', (req, res) => {
    res.render('works')
})

app.get('/gallery-photos', (req, res) => {
    res.render('photo-gallery')
})
app.get('/*', (req, res) => {
    res.render('page404')
})

app.listen(PORT, () => {
    console.log(`listen in ${PORT}`)
})