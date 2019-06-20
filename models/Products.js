// 1. Importaciones / Requerimientos
const mongoose = require('mongoose'); 

// 2. Schema / Esquema
const productSchema = mongoose.Schema({
    product: {
        type: String
    },
    name: {
        type: String,
        required: true,
        unique: 1
    },
    size: {
        type: String
    },
    price: {
        type: Number
    },
    total: {
        type: Number
    },
    img: {
        type: String
    },
    specifications: {
        type: String
    },
    category: {
        type: String
    },
    quantity: {
        type: Number
    },
}); 

// 3. Conversion a modelo o model convertion 
// Mayuscula al inicio por buena practica en el nombre del modelo
// 3 argumentos, Modelo, nombre del esquema, nombre de la colección
const Products = mongoose.model('Products', productSchema, 'products')

// 4. Exportación
module.exports = {Products}

