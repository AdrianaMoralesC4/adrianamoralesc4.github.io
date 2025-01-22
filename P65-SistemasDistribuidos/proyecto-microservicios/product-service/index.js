const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const authenticMiddleware = require('./middleware/authentication.js'); 
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Product-service esta conectado a MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/product', authenticMiddleware, async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        res.status(500).send({ error: 'Error al obtener los productos.'}, err);
    }
    });

app.post('/product', authenticMiddleware, async (req, res) => {
    try {
        const {name, price, stock} = req.body
        const newProduct = new Product({name, price, stock});
        await newProduct.save();
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(500).send({ error: 'Error al crear el producto'}, err);
    }
});

/*app.delete('/products', authMiddleware, async (req, res) => {
    try {
        const newProduct = await Product.findOneAndDelete(req.params.);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});*/

app.listen(3000, () => console.log('Servicio de producto ejecutandose en http://localhost:3001'));

