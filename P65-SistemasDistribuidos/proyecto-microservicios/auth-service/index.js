// Requerir dependencias
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const User = require('./models/User.js');

dotenv.config();

// Configurar Express
const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Auth-service conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// Endpoint de register
app.post('/user/register', async(req, res) =>{
  try {
    const {username, password} = req.body;

    if (!username || !password) {
      return res.status(400).send({error: 'Username y contraseña son obligatorios.'});
    }

    const hashedPassword = await bcrypt.hash(password, 7);

    const newUser = new User({username, password: hashedPassword});
    await newUser.save();

    res.status(201).send({ message: 'Usuario registrado exitosamente.'});
    
  } catch (err) {
   res.status(500).send({ error: 'Error al registrar el usario.'}, err); 
  }
});  

// Endpoint de login
app.post('/user/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ message: 'Credenciales invalidas.'});   
    }

    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({token});

  } catch (err) {
    res.status(500).send({ error: 'Error al procesar el login'}, err);
  }
});

// Endpoint protegido
app.get('/user/verify', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).send({ error: 'Token no obtendio.'});
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.send({ valid: true, user: decoded });
  } catch (err) {
    res.status(401).send({ error: 'Token inválido.' });
  }
});

// Iniciar el servidor
app.listen(3000, () => console.log('Servicio de autenticación ejecutando en http://localhost:3000'));
