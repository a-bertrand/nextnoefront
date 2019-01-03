const withSass = require('@zeit/next-sass')

module.exports = withSass({
    cssModules: false,
    assetPrefix: process.env.CDN_PREFIX,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:4]",
      }
  });