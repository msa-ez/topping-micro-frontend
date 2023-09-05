module.exports = {
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
}