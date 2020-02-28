const fs = require('fs')
const path = require('path')

const cfg = {
	entry: {
		main: './src/index.tsx',
	},
	output: {
		path: __dirname + '/assets'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'src/tsconfig.json',
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	}
}

module.exports = [
	{
		...cfg,
		mode: 'production',
		name: 'production',
	},
	{
		...cfg,
		name: 'development',
		mode: 'development',
		devtool: 'source-map',
		devServer: {
			contentBase: './',
			publicPath: '/assets/',
			port: 8081,
			before: (app, server, compiler) => {
				app.get('/', (req, res) => {
					const html = fs.readFileSync(
						path.join(process.cwd(), 'index.html'),
						'utf-8',
					)
					res.set('Content-Type', 'text/html')
					res.send(html)
				})
			},
		},
		module: {
			rules: [
				...cfg.module.rules,
				{
					enforce: 'pre',
					test: /\.js$/,
					loader: 'source-map-loader',
				},
			],
		},
	},
]
