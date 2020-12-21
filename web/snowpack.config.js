module.exports = {
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        sourceMap: true,
      },
    ],
  ],
  installOptions: {
    sourceMap: true
  },
  buildOptions: {
    clean: true,
    sourceMaps: true
  },
  mount: {
    src: '/',
    'node_modules/monaco-editor/esm/vs/editor': '/',
  },
}
