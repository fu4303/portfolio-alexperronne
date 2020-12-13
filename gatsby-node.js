const path = require("path")

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig()

  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    }
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@context": path.resolve(__dirname, "src/context"),
        "@data": path.resolve(__dirname, "src/data"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@sections": path.resolve(__dirname, "src/sections"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@utils": path.resolve(__dirname, "src/utils")
      }
    }
  })
}
