const express = require('express');
const manager = require('../lib/file-manager');
const sendError = require('./err');

const app = express();

app.delete('/', (req, res) => {
	const file = req.body.file;
	if (!file) {
		return sendError(res, { statusCode: 400, message: 'Invalid params' });
	}

	return manager
		.remove(file)
		.then(res.send.bind(res))
		.catch(err => sendError(res, err));
});
