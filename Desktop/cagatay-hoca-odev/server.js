const express = require('express')
const app = express()
const port = 3000


const PRODUCTS = [
    {'id': 1, 'name': 'IPhone X', 'price': 7300},
    {'id': 2, 'name': 'IPhone 12', 'price': 9999},
    {'id': 3, 'name': 'IPhone 12 Pro', 'price': 14999},
    {'id': 4, 'name': 'IPad Pro', 'price': 7500},
    {'id': 5, 'name': 'Macbook Pro', 'price': 14000},
    {'id': 6, 'name': 'Air Pods', 'price': 1500},
    {'id': 7, 'name': 'Macbook Air', 'price': 11000},
    {'id': 8, 'name': 'Apple TV', 'price': 1400},
    {'id': 9, 'name': 'Apple Pen', 'price': 2000},
    {'id': 10, 'name': 'Magic Mouse', 'price': 1000}
]

app.get('/product',(req,res) => {
    res.json(PRODUCTS)
})

app.get('/product/:id', (req, res) => {
  let productId = req.params.id;
  let product = PRODUCTS.find(x=> x.id == productId)
  res.json(product)
})

app.get('/search', (req, res) => {
    let query = req.query.name.toLowerCase();
    const sonuc = []
    console.log(query);
    PRODUCTS.forEach(el => {
        el.name.toLowerCase().includes(query) ? sonuc.push(el) : null
    });
    res.json(sonuc)
})

app.get('/product/count/:count', (req, res) => {
    let count = req.params.count;
    res.send(PRODUCTS.slice(0,count))
})


app.listen(port)