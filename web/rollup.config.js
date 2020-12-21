// import { terser } from 'rollup-plugin-terser'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'node_modules/monaco-editor/esm/vs/editor/editor.worker.js',
  context: 'self',
  output: {
    file: 'src/editor.worker.js',
    format: 'iife',
    name: 'whatever',
    sourcemap: true,
  },
  plugins: [
    // terser(),
  ],
}
