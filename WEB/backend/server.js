const express = require('express') //import express
const mongoose = require('mongoose') 
const cors = require('cors')
const bodyParser = require('body-parser')

const requireDir = require('require-dir')

const app = express(); // creataes an express aplication
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) //enviar dados para aplicacao em formato de json

app.use(cors())

mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser:true }
    );

requireDir("./src/models") //chamando models



app.use('/api',require('./src/routes')) //recebe requisicao


app.listen(3000); // ouvindo a porta 3001 do navegador

