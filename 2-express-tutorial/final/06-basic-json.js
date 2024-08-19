const express = require('express')
const app = express();
const {products, people} = require('./data.js')


app.get('/', (req, res) => {
    // res.status(200).send("HOME PAGE")
    res.json(products)
})

app.get('/about', (req, res) => {
    res.status(200).send("ABOUT PAGE")

})

app.get('*', (req, res) => {
    res.status(404).send("PAGE NOT FOUND")
})


app.listen(5000, () => {
    console.log("LISTENING TO PORT 5000");
})