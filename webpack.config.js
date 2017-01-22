const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLConfig = new HTMLWebpackPlugin({
	template: __dirname + '/src/admin/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: ['./src/admin/index.js'],
	output: {
		path: __dirname + '/public/admin',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	plugins: [HTMLConfig]
}
