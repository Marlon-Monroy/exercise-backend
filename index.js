
const router = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./utils');

const app = express();


app.use(bodyParser.json());

app.use(router);

app.listen(utils.env.port, ()=> {
    console.log('Starting server on '+utils.env.port);
});