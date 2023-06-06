const CND = {
  development: {
    js: [
      "https://unpkg.com/vue@3.2.13/dist/vue.global.js",
      "https://unpkg.com/vue-router@4.1.6",
      "https://unpkg.com/vuex@4.1.0",
      "https://unpkg.com/view-ui-plus",
    ],
    css: ["https://unpkg.com/view-ui-plus/dist/styles/viewuiplus.css"],
  },
  production: {
    js: [
      "https://unpkg.com/vue@3.2.13/dist/vue.global.prod.js",
      "https://unpkg.com/vue-router@4.1.6",
      "https://unpkg.com/vuex@4.1.0",
      "https://unpkg.com/view-ui-plus",
    ],
    css: ["https://unpkg.com/view-ui-plus/dist/styles/viewuiplus.css"],
  }
};
const env = process.env.NODE_ENV
module.exports = CND[env]