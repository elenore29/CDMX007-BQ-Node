//2. Middlewares / Cadeneros
//Modelos 
const {Products} = require('../models/Products');

module.exports = (app, next) => {
app.get('/products', (req, res) => {
    Products.find({}, (err, products) => {
        res.send(products);
    });
});

app.post('/products', (req, res) => {
    console.log(req.body)
    const newProduct = new Products(req.body)
    console.log(newProduct)
    newProduct.save((err, data) => {
        if (err) {
            return err
        }
        res.send(data)
    }); 
}); 
return next(); 
}
