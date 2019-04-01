const express = require('express');
const app = express();
const router = express.Router();
const cors =  require('cors')
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;


