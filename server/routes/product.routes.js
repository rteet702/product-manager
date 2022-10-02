const PersonController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/products', PersonController.getAllProducts)
    app.post('/api/products', PersonController.createProduct)
}