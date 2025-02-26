const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    main: "./server.js",
  },
  output: {
    path: path.join(__dirname, "dev-build"),
    publicPath: "/",
    filename: "[name].js",
    clean: true,
  },
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".node"],
  },
  stats: {
    errorDetails: true,
  },
  ignoreWarnings: [
    {
      module: /express\/lib\/view\.js/,
      message: /the request of a dependency is an expression/,
    },
  ],
};
