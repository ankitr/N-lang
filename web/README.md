# Online N editor

Uses [Monaco](https://microsoft.github.io/monaco-editor/) for a VS Code-like
experience.

**IMPORTANT**: In order to build this, you need to first build the Nearley
**grammar in the [js/ folder](../js/) first. See its README for more info.

```sh
# Install dependencies
npm install
```

First, you should build Monaco's editor.worker.js:

```sh
# Install Rollup globally
npm install --global rollup

# Build editor.worker.js so it works with Snowpack
npm run build:editor
```

Then start the Snowpack dev server:

```sh
npm start
```

And when you're done and ready to release:

```sh
# Build
npm run build
```
