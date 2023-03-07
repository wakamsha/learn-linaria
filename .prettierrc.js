const organizeImports = require("prettier-plugin-organize-imports");

/**
 * @see https://prettier.io/docs/en/options.html
 */
module.exports = {
  printWidth: 120, // Extend from default (80) to prevent excessive line breaks.
  // tabWidth: 2,
  // useTabs: false,
  // semi: true,
  singleQuote: true, // Change from default (false) because it's easier to type and read than double-quote.
  // quoteProps: "as-needed",
  // jsxSingleQuote: false,
  trailingComma: "all", // To facilitate reordering object properties.
  // bracketSpacing: true,
  // bracketSameLine: false,
  // arrowParens: "always",
  // rangeStart: 0,
  // rangeEnd: Infinity,
  // parser: undefined,
  // filePath: undefined,
  // requirePragma: false,
  // insertPragma: false,
  // proseWrap: "preserve",
  // htmlWhitespaceSensitivity: "css",
  // vueIndentScriptAndStyle: false,
  // endOfLine: "lf",
  // embeddedLanguageFormatting: "auto",
  // singleAttributePerLine: false,

  // workaround to run with pnpm.
  // see: https://github.com/simonhaenisch/prettier-plugin-organize-imports/issues/34
  plugins: [organizeImports],
};
