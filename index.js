const express = require('express');
require('dotenv').config();
const {dbConnection} = require ('./database/config');
const cors = require('cors')

//crear el servidor 
const app = express();

app.use(cors());

app.use(express.json());


//Base de datos
dbConnection();
//SicVx0OmnGEIJMLl

//rutas
app.use('/api/diagnosticos', require('./routes/diagnosticos'));
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/upload', require('./routes/uploads'));



app.listen(process.env.PORT, () => {
console.log('servidor corriendo en puerto' + process.env.PORT);
});