const { defineConfig } = require('@vue/cli-service')
const pages = require('./config/pages');
const { PAGE_NAME } = process.env;

console.log('PAGE_NAME', PAGE_NAME)
module.exports = defineConfig({
  outputDir: `dist/${PAGE_NAME}`,
  pages: {
    [PAGE_NAME]: pages[PAGE_NAME] },
})
