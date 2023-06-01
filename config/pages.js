const pagesConfig = {
  user: {
    publicPath: "./",
    entry: "src/modules/user/main.js",
    template: "public/index.html",
    outputDir: "dist/user",
  },
  client: {
    publicPath: "./",
    entry: "src/modules/client/main.js",
    template: "public/index.html",
    outputDir: "dist/client",
  },
};

module.exports = pagesConfig;
