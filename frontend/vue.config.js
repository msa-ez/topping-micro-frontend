const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    output: {
      libraryTarget: "system",
      filename: "js/app.js",
    },
  },
  devServer: {
    disableHostCheck: true
  },
  externals: ["vue", "vue-router", /^@my-app\/.+/]
})