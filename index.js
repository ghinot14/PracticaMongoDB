require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {dbConection} = require('./config/database');


// Creando el servidor Expres
const app = express();

// Configuración de CORS
app.use(cors());

app.use(express.json());

// Conexion a la BD
dbConection();

// Rutas de la API
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require ('./routes/auth.routes'));
app.use('/api/alumno', require ('./routes/alumno.routes'));
app.use('/api/docente', require ('./routes/docente.routes'));
app.use('/api/salon', require ('./routes/salon.routes'));
app.use('/api/curso', require ('./routes/curso.routes'));

// Para levantar el servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})