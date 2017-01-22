'use strict';

const express = require('express');
const subdomain = require('express-subdomain');
const morgan = require('morgan');

const app = express();

app.use(morgan(process.env.EXPRESS_LOG_FORMAT || 'combined'));
app.use(subdomain('api', () => {}));
app.use(subdomain('admin', (req, res) => {
	return res.sendFile('../public/admin/index.html');
}));

module.exports = app;
