var webpack = require("webpack");
var path = require("path");

var plugins = [
	new webpack.LoaderOptionsPlugin({ minimize: true }),
];

module.exports = [
	{
		entry: "./source/index.js",
		output: {
			path: __dirname,
			filename: "bundle.js"
		},
		resolve: {
			extensions: [ ".js", ".jsx", ".glsl", ".frag", ".vert" ]
		},
		module: {
			loaders: [
				{
					test: /\.js?$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					options: { presets: [ 
						["es2015", { modules: false }]
					] }
				},
				{
					test: /\.(glsl|frag|vert)$/,
					loader: "raw",
					exclude: /node_modules/
				},
				{
					test: /\.(glsl|frag|vert)$/,
					loader: "glslify",
					exclude: /node_modules/
				},
				{
					test: /node_modules/,
					loader: 'ify-loader'
				},
				{
					test: /\.js$/,
					loader: 'ify-loader',
					enforce: 'post'
				},

				{
					test: /\.(stl|obj)$/,
					loader: "raw-loader"
				}

			]
		},
		plugins: plugins
	}
];