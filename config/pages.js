const pagesConfig = {
  user: {
    publicPath: "./",
    entry: "src/modules/user/main.js",
    template: "public/index.html",
    filename: "index.html",
    title: 'user',
    outputDir: "dist/user",
    chunks: ["chunk-vendors", "chunk-common", "user"]
  },
  client: {
    publicPath: "./",
    entry: "src/modules/client/main.js",
    filename: "index.html",
    title: 'client',
    template: "public/index.html",
    outputDir: "dist/client",
    chunks: ["chunk-vendors", "chunk-common", "client"]
  },
};

module.exports = pagesConfig;
