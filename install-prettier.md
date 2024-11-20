# Intructions for installing prettier

1. Run command `pnpm --filter frontend add add -D prettier eslint-config-prettier eslint-plugin-prettier`

2. Create a `.prettierrc.js` file in the root of the project.

3. Add the following configuration to the `.prettierrc.js` file created in step 2:

```javascript
module.exports = {
  printWidth: 120, // max 120 chars in line, code is easy to read
  useTabs: false, // use spaces instead of tabs
  tabWidth: 2, // "visual width" of of the "tab"
  trailingComma: 'es5', // add trailing commas in objects, arrays, etc.
  semi: true, // add ; when needed
  singleQuote: true, // '' for stings instead of ""
  bracketSpacing: true, // import { some } ... instead of import {some} ...
  arrowParens: 'always', // braces even for single param in arrow functions (a) => { }
  jsxSingleQuote: false, // "" for react props, like in html
  bracketSameLine: false, // pretty JSX
  endOfLine: 'lf', // 'lf' for linux, 'crlf' for windows, we need to use 'lf' for git
};
```

** Note: ** There no need to create a `.prettierrc.js` file in frontend folder, because it will automatically use the one in the root of the project.
