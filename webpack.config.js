const webpack = require("webpack");
const RelayCompilerWebpackPlugin = require("relay-compiler-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["relay"],
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new RelayCompilerWebpackPlugin({
      schema: path.resolve(__dirname, "./schema.graphql"),
      src: path.resolve(__dirname, "./src")
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
