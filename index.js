
const router = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(router);

app.listen(3000, ()=> {
    console.log('Starting server on 3000');
});