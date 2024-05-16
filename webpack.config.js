const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'frontend', 'main.js'), // ./frontend/main.js
	output: {
		path: path.resolve(__dirname, 'public', 'assets', 'js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				// configurações referentes ao javascript
				exclude: /node_modules/,
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env']
					}
				}
			},
			{
				// configurações de minificação para css
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devtool: 'source-map'
};
