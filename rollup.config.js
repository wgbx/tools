import NodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

const name = 'tool'

export default {
  input: './packages/core/index.ts',
  output: [
    {
      name,
      file: `dist/${name}.js`,
      format: 'esm',
      plugins: [terser()]
    }
  ],
  plugins: [
    NodeResolve(),
    commonjs(),
    typescript({
      outDir: 'dist/'
    }),
    babel({
      extensions: ['js', 'ts'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    })
  ]
}
