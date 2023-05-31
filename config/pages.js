const path = require('path')
const pagesConfig = {
    admin: {
        publicPath: './',
        entry: 'src/modules/admin/main.js',
        template: 'public/index.html',
        outputDir:'/dist/admin/',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    client: {
      publicPath: './',
      entry: 'src/modules/client/main.js',
      template: 'public/index.html',
      outputDir: path.resolve(__dirname, 'dist/client'),
  }
}

module.exports = pagesConfig;