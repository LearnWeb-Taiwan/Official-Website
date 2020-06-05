module.exports = {
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': 'off',
    endOfLine: 0,
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
  },
}
