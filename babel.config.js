module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          node: '8'
        }
      }
    ]
  ],
  plugins: [['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }]]
}
