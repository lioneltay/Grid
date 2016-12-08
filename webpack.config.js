const path = require('path')

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
			test: /.jsx?$/,
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
		root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
		inline: true,
    contentBase: './'
  }
};
