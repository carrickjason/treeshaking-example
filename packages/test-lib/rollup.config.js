import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import path from 'path'

export default {
  input: path.resolve(__dirname, './src/index.js'),
  output: {
    file: path.resolve(__dirname, './lib/test-lib.js'),
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    resolve({ extensions: ['.js', '.jsx'] }),
    commonjs({
      include: ['node_modules/**']
    }),
    babel({
      runtimeHelpers: true,
      exclude: ['**/node_modules/**', '**/*.test.js'],
      babelrc: false,
      presets: [
        ['@babel/env', { loose: true, modules: false }],
        '@babel/react'
      ],
      plugins: [
        ['@babel/plugin-transform-runtime', { useESModules: true }],
        ['@babel/proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        'transform-react-remove-prop-types',
        'annotate-pure-calls',
        require(path.resolve(
          __dirname,
          '../../build/static-class-properties-fix'
        ))
      ]
    }),
    replace({ 'process.env.NODE_ENV': '"production"' })
  ],
  context: 'window',
  external (id) {
    return !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/')
  },
  watch: {
    exclude: ['node_modules/**', '**/*.test.js'],
    clearScreen: false
  }
}
