//Importando componentes de express y morgan
const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');

const refRoutes = require('./routes/ref.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(refRoutes);

app.listen(4000);
console.log('Server at 4000');