const express = require('express')

const app = express()
const port = 3000
const fruits = require('./models/fruits')
const vegetables = require('./models/vegetables')
const cars = require('./models/cars')
const flowers = require('./models/flowers')
const pokemons = require('./models/pokemon')
//data

//midware
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//routes
app.get('/fruits/', (req, res) => {
    res.render('fruits/Index', {fruits: fruits})
})
app.get('/vegetables/', (req, res) => {
    res.render('vegetables/Index', {vegetables: vegetables})
})
app.get('/cars/', (req, res) => {
    res.render('cars/Index', {cars: cars})
})
app.get('/flowers/', (req, res) => {
    res.render('flowers/Index', {flowers: flowers})
})
app.get('/pokemons/', (req, res) => {
    res.render('pokemon/Index', {pokemons: pokemons})
})
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('fruits/Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
})
app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    res.render('vegetables/Show', { //second param must be an object
        vegetable: vegetables[req.params.indexOfVegetablesArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
})
app.get('/cars/:indexOfCarsArray', (req, res) => {
    res.render('cars/Show', { //second param must be an object
        car: cars[req.params.indexOfCarsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
})
app.get('/flowers/:indexOfFlowersArray', (req, res) => {
    res.render('flowers/Show', { //second param must be an object
        flower: flowers[req.params.indexOfFlowersArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
})
app.get('/pokemons/:indexOfPokemonsArray', (req, res) => {
    res.render('pokemon/Show', { //second param must be an object
        pokemon: pokemons[req.params.indexOfPokemonsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
})
app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
})
