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
      sockPort: {{portGenerated}},
      sockHost: "localhost",
      port: {{portGenerated}}
    },
}