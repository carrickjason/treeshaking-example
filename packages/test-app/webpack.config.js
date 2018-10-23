const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './dist')
  },
  externals: [
    'react',
    'react-dom',
    'prop-types',
    'emotion',
    'react-emotion',
    'react-markdown',
    'polished',
    'react-router',
    'react-router-dom',
    'react-transition-group'
  ],
  node: {
    global: false,
    process: false,
    __filename: false,
    __dirname: false,
    Buffer: false,
    setImmediate: false
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, './dist')])
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: false
    // })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          warning: true,
          compress: {
            sequences: false,
            properties: false,
            conditionals: false,
            comparisons: false,
            evaluate: false,
            booleans: false,
            loops: false,
            hoist_funs: false,
            hoist_vars: false,
            if_return: false,
            join_vars: false,
            keep_fnames: true,
            keep_classnames: true
          },
          output: { beautify: true },
          mangle: false
        }
      })
    ]
  }
}
