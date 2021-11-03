// Only used for jest. Vite handles babel transpilation on it's own.
// eslint-disable-next-line
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@utils': './src/utils.tsx',
          '@store': './src/store/index.ts',
          '@features': './src/features',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
