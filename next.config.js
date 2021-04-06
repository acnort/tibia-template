module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          eslintPath: require.resolve('eslint'),
        }
      })
    }
    return config
  }
}