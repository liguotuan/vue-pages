const { defineConfig } = require("@vue/cli-service");
const ZipPlugin = require("zip-webpack-plugin");
const pages = require("./config/pages");
const path = require("path");
const { PAGE_NAME } = process.env;

function resolve(dir) {
  return path.resolve(__dirname, ".", dir);
}
function getPages() {
  let myPages = {};
  let pageList = PAGE_NAME.split(",");
  pageList.forEach((page) => {
    console.log();
    let item = {
      [page]: pages[page],
    };
    myPages = {
      ...myPages,
      ...item,
    };
  });
  return myPages;
}

const config = defineConfig({
  lintOnSave: false,
  publicPath: "./",
  filenameHashing: true,
  outputDir: `dist/${PAGE_NAME}`,
  pages: getPages(),
  configureWebpack: {
    plugins: [
      new ZipPlugin({
        path: resolve("dist/zip"), //路径名
        filename: `${PAGE_NAME}.zip`, //打包名
      }),
    ],
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      "view-ui-plus": "ViewUIPlus",
    },
  },
});
console.log(config)

module.exports = config;
