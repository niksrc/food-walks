'use strict';

const { resolve } = require('path');
const levelup = require('levelup');
const leveldown = require('leveldown');
const sublevel = require('level-sublevel');
const bytewise = require('bytewise');

const location = resolve(__dirname, '../db');

const db = sublevel(levelup(location, {
	db: leveldown,
	cacheSize: 50 * 1024 * 1024, // 50 mb lru read cache
	valueEncoding: 'json',
	keyEncoding: bytewise,
}));

module.exports = db;
