module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: "system",
      filename: "js/app.js",
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      disableHostCheck: true,
      sockPort: 8080,
      sockHost: "localhost",
      port: 8080
    },
  }
}