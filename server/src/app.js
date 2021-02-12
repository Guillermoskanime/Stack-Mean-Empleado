const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express()

// variables de entorno
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extends:false}));

app.use( "/api/empleados", require('./routes/empleados.routes'))

module.exports=app;