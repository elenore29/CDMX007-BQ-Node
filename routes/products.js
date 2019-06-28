const {
    requireAdmin
} = require('../middleware/auth');

const {
    Products
} = require('../models/Products');

module.exports = (app, next) => {
    app.get('/products', (req, res) => {
        Products.find({}, (err, products) => {
            if (err) {
                return err
            }; 
            res.send(products);
        });
    });

    app.post('/products', requireAdmin, (req, res) => {
        const newProduct = new Products(req.body)
        newProduct.save((err, data) => {
            if (err) {
                return err
            }
            res.send(data)
        });
    });

    app.get('/products/:id', (req, res) => {
        Products.find({
            _id: req.params.id
        }, (err, data) => {
            if (err) {
                return err
            }
            res.send(data);
        });
    });

    app.put('/products/:id', requireAdmin, (req, res) => {
        Products.findOneAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true
            })
            .then(function () {
                Products.findOne({
                    _id: req.params.id
                }).then(function (data) {
                    res.send(data);
                });
            });
    });

    app.delete('/products/:id', requireAdmin, (req, res, next) => {
        Products.deleteOne({
                _id: req.params.id
            })
            .then(() => {
                return Products.find();
            })
            .then(doc => res.json(doc))
            .catch(next);
    });

    return next();
};