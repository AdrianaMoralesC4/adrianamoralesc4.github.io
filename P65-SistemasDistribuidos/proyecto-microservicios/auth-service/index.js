// Cargar las variables de entorno
require('dotenv').config();

// Requerir dependencias
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Modelo de Usuario

// Configurar Express
const app = express();
app.use(express.json());

// Cargar variables de entorno
const jwtSecret = process.env.JWT_SECRET;
const mongoUri = process.env.MONGO_URI;

// Conexión a MongoDB
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// Middleware de autenticación
function authenticate(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).send('Token requerido');

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return res.status(401).send('Token inválido');
    req.user = decoded;
    next();
  });
}

// Endpoint de login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && user.password === password) {
      const token = jwt.sign({ id: user._id, username: user.username }, jwtSecret, { expiresIn: '1h' });
      return res.status(200).json({ message: 'Login exitoso', token });
    }
    res.status(401).send('Credenciales inválidas');
  } catch (error) {
    res.status(500).send('Error al procesar el login');
  }
});

// Endpoint protegido
app.get('/protected', authenticate, (req, res) => {
  res.status(200).send(`Bienvenido, ${req.user.username}`);
});

// Iniciar el servidor
app.listen(3001, () => {
  console.log('Servicio de autenticación corriendo en el puerto 3001');
});
