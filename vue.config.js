"use strict"
const titles = require("./title.js")
const glob = require("glob")
const pages = {}
const init = require("./init.js")
// let patterns = []

glob.sync("./src/pages/**/app.js").forEach(path => {
  const chunk = path.split("./src/pages/")[1].split("/app.js")[0]
  // const com = "im-" + chunk.replace("/", "-")
  pages[chunk] = {
    entry: path,
    template: path.replace("app.js", "/index.html"),
    title: titles[chunk],
    chunks: ["chunk-vendors", "chunk-common", chunk]
  }
  // patterns.push({
  //   match: /<com>.*<\/com>/,
  //   replacement: "<" + com + ">" + "</" + com + ">"
  // })
})
// console.log(patterns)
module.exports = {
  pages,
  productionSourceMap: false,
  chainWebpack: config => {
    config.optimization.delete("splitChunks")
    //render extent for html
    config.plugin("define").tap(args => {
      let base = args[0]["process.env"]
      args[0] = {
        ...base,
        INIT: JSON.stringify(init)
      }
      return args
    })
  },
  filenameHashing: false, //remove hash
  configureWebpack: {
    externals: {
      //import from script browser
      vue: "Vue",
      "element-ui": "ELEMENT"
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  }
}
