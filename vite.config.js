// vite.config.js
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
const { createVuePlugin } = require('vite-plugin-vue2')
import path from 'path'

function resolve(dir) {
  return path.resolve(__dirname, './', dir)
}

module.exports = {
  base: './',
  resolve: {
    alias:{
      '@': resolve('./src'),
    },
    extensions: ['.js', '.vue', '.json'],
  },
  plugins: [
    createVuePlugin({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      wrapperClasses: 'markdown-body',
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      },
    }),
  ],
}
