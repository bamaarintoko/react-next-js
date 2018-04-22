const path = require('path')
const glob = require('glob')

module.exports = {
	exportPathMap: function (defaultPathMap) {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/readme.md': { page: '/readme' },
			'/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
			'/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
			'/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
		}
	},
	webpack: (config, { dev }) => {
		config.module.rules.push(
			{
				test: /\.(css|scss)/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]'
				}
			}
			,
			{
				test: /\.(png|jpg|gif)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {}  
				  }
				]
			  }
			,
			{
				test: /\.css$/,
				use: ['babel-loader', 'raw-loader', 'postcss-loader']
			}
			,
			{
				test: /\.s(a|c)ss$/,
				use: ['babel-loader', 'raw-loader', 'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							includePaths: ['styles', 'node_modules']
								.map((d) => path.join(__dirname, d))
								.map((g) => glob.sync(g))
								.reduce((a, c) => a.concat(c), [])
						}
					}
				]
			}
		)
		return config
	}
}