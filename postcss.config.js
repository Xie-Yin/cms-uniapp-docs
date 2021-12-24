module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 6,
      exclude(file) {
        return !file.includes('/cms-uniapp/')
      }
    },
    'postcss-rpxtopx': {}, // 小程序rpx单位转px
    autoprefixer: {},
  },
}
