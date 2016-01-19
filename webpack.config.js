var path = require('path');
var webpack = require('webpack');
var TapWebpackPlugin = require('tap-webpack-plugin');

module.exports = {
	target: 'node',
	entry: ['./test'],
	output: {
		path: 'output',
		filename: 'test.js'
	},
	plugins: [
		new TapWebpackPlugin();
		]
};

module.exports = {
    entry: './es6/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                query: {
                  presets: 'es2015',
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
