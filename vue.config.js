module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/Official-Website/' : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/app.scss";',
      },
    },
  },
}
