module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          node: '6'
        }
      }
    ]
  ],
  plugins: [['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }]]
}
