module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  globals: {
    JSX: true
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'multiline-ternary': 'off'
  }
}
