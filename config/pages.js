const cdn = require('../cdn')

const pagesConfig = {
  index: {
    publicPath: "./",
    entry: "src/modules/client/main.js",
    template: "../public/index.html",
    filename: "index.html",
    title: "index",
    outputDir: "dist/index",
    chunks: ["chunk-vendors", "chunk-common", "index"],
  },
  admin: {
    publicPath: "./",
    entry: "src/modules/admin/main.js",
    filename: "index.html",
    title: "client",
    template: "src/modules/admin/index.html",
    outputDir: "dist/admin",
    chunks: ["chunk-vendors", "chunk-common", "admin"],
    cdn
  },
  client: {
    publicPath: "./",
    entry: "src/modules/client/main.js",
    filename: "index.html",
    title: "client",
    template: "src/modules/client/index.html",
    outputDir: "dist/client",
    chunks: ["chunk-vendors", "chunk-common", "client"],
    cdn
  },
};

module.exports = pagesConfig;
