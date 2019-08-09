const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');

module.exports = withFonts(withSass({
    cssModules: false,
    assetPrefix: process.env.CDN_PREFIX,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:4]",
      }
  }));