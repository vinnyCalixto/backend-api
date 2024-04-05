require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');

const apiRouters = require('./src/routes')

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,    
    useUnifiedTopology: true    
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(error) => {
    console.log("erro:", error.message);
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extend: true}));
server.use(fileupload());

server.use(express.static('public'));

server.use('/', apiRouters);

server.listen(process.env.PORT, ()=>{
    console.log(`Rodando no endereço: ${process.env.BASE}`);
});