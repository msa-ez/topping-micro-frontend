module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    output: {
      libraryTarget: "system",
      filename: "js/app.js",
    },
    externals: ["vue", "vue-router", /^@my-app\/.+/]
  },
  devServer: {
    disableHostCheck: true
  },
}