module.exports = (api) => {
  if (api.env('test')) {
    return {
      ignore: [/(node_modules)/],
      presets: [
        [
          '@babel/preset-env',
          {
            corejs: 3,
            targets: {
              node: 'current'
            },
            useBuiltIns: 'usage'
          }
        ]
      ]
    }
  }
  return {
    ignore: [/(node_modules)/],
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: 3,
          useBuiltIns: 'usage'
        }
      ]
    ]
  }
}
