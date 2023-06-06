const { defineConfig } = require('@vue/cli-service')
const pages = require('./config/pages');
const { PAGE_NAME } = process.env;

function getPages() {
  let myPages = {}
  let pageList = PAGE_NAME.split(',');
  pageList.forEach(page => {
    console.log()
    let item = {
      [page]: pages[page]
    }
    myPages = {
      ...myPages,
      ...item
    }
  })
  return myPages;

}

module.exports = defineConfig({
  lintOnSave: false,
  publicPath: "./",
  filenameHashing: true,
  outputDir: `dist/${PAGE_NAME}`,
  pages: getPages(),
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'view-ui-plus': 'ViewUIPlus'
    }
  }

})
