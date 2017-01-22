'use strict';

const { resolve } = require('path');
const levelup = require('levelup');
const leveldown = require('leveldown');
const sublevel = require('level-sublevel');

const location = resolve(__dirname, '../db');

const db = sublevel(levelup({
	db: leveldown(location),
	cacheSize: 50 * 1024 * 1024, // 50 mb lru read cache
}));

module.exports = db;
