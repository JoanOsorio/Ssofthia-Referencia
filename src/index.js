//Importando componentes de express y morgan
const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');

const refRoutes = require('./routes/ref.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(refRoutes);

app.listen(3000);
console.log('Server at 3000');