const express = require('express');
const file = require('./file');

const app = express();

app.use('/fs', file);

module.exports = app;
