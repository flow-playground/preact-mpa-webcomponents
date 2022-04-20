const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    "index.bundle": path.resolve(__dirname, "src/entries/index.tsx"),
    "greeting.bundle": path.resolve(__dirname, "src/entries/greeting.tsx"),
    "slot.bundle": path.resolve(__dirname, "src/entries/slot.tsx"),
  },
  output: {
    // path: path.resolve(__dirname, "./shopify/assets/"),
    path: path.resolve(__dirname, "./static/assets/"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
};
