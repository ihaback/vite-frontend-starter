module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.tsx', './src/utils.tsx', './vite.config.ts', './jest-setup.ts'] }],
    'import/extensions': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react/function-component-definition': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@features', './src/features'],
          ['@store', './src/store'],
          ['@styles', './src/styles'],
          ['@utils', './src/utils.tsx'],
        ],
        extensions: ['.ts', '.tsx', '.json'],
      },
    },
  },
};
