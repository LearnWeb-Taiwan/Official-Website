module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/app.scss";',
      },
    },
  },
}
