const { resolve } = require('path');
const del = require('del');

const baseDir = resolve(__dirname, '../../public/assets');
const remove = file => del([resolve(baseDir, file.name, file.path)]);

module.exports = { remove };
