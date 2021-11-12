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
};
