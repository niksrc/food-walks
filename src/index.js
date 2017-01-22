'use strict';
const { createServer } = require('http');
const app = require('./app');

createServer(app).listen(process.env.PORT || 1337);
