const express = require('express')
const app = express();
const {products} = require('./data.js')

app.get('/', (req, res) => {
    res.status(200).send('<h1>HOME PAGE</h1> <a href="/api/products">products</a>')
    
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id,name,image} = product; // not using all the data in product only some
        return{id,name,image}
    })
    res.json(newProducts)
})

// SINGLE 
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1)
//     res.json(singleProduct)
// })

//
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    const {productID, reviewID} = req.params;
    res.send(`PRODUCT ID: ${productID} REVIEW ID: ${reviewID}`);  
})

//SINGLE PARAMS
app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('PRODUCT DOES NOT EXIST')
    }
    return res.json(singleProduct)
})

// QUERY
app.get('/api/v1/query', (req,res) =>{
    console.log(req.query);
    const {search,limit} = req.query
    let sortedProducts =[...products];

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        // res.status(200).send('no products matched')
        return res.status(200).json({sucess:true, data: []})
    }
    return res.status(200).json(sortedProducts)
})


// app.get('*', (req, res) => {
//     // res.status(404).send("PAGE NOT FOUND")
// })


app.listen(5000, () => {
    console.log("LISTENING TO PORT 5000");
})