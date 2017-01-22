const pify = require('pify');
const { obj: through } = require('through2');
const db = require('../lib/db');

const users = db.sublevel('users');

const get = user => pify(users.get)(user.email);

const create = user => get(user)
	.then(() => Promise.reject({ statusCode: 409, message: 'Already exists' }))
	.catch(() => pify(users.put)(user.email, user));

const remove = user => get(user)
	.then(user => pify(users.del)(user.email));

const list = () => users
	.createReadStream()
	.pipe(through(function (chunk, env, cb) {
		this.push(chunk.value);
		cb();
	}));

module.exports = { create, get, remove, list };
