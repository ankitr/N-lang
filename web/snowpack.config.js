module.exports = {
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
    'node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codicon': {
      url: '/',
      static: true
    }
  }
}
