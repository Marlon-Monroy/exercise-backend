
const router = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const  port = process.env.port || 3000;
app.use(bodyParser.json());

app.use(router);

app.listen(port, ()=> {
    console.log('Starting server on '+port);
});