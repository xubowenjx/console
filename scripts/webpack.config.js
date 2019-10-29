const path = require("path");
let package = require("../package.json");
let { CleanWebpackPlugin } = require("clean-webpack-plugin");
let resolve = _path_ => {
  let path_ = path.resolve(__dirname, _path_);
  return path_;
};
module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve("../dist"),
    filename: "index.js",
    library: package.name,
    globalObject: "this",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, //排除掉node_module目录
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"]
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};
