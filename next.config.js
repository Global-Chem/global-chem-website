// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/global-chem-website/' : '',
  images: {
    unoptimized: true,
  },
}