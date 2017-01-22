const pify = require('pify');
const db = require('../lib/db');

function Section(section) {
	this._db = db.sublevel(section);
}

Section.prototype.get = function (item) {
	if (!item.name) {
		return Promise.reject({ statusCode: 404, message: 'Not found' });
	}

	return pify(this._db.get)(item.name);
};

Section.prototype.create = function (item) {
	return this.get(item.name)
		.then(() => Promise.reject({ statusCode: 409, message: 'Already exists' }))
		.catch(() => pify(this._db.put)(item.name, item));
};

Section.prototype.update = function (item) {
	return this.get(item)
		.then(savedItem => Object.assign(savedItem, item))
		.then(item => pify(this._db.put)(item.name, item));
};

Section.prototype.reorder = function (items) {
	return Promise.all(items.map(item => this.update(item)));
};

Section.prototype.list = function () {
	return this._db.createReadStream();
};

module.exports = Section;
