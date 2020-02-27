module.exports = {
  devServer: {
    proxy: {
      "/api/hello": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api/hello": "/"
        }
      }
    }
  }
};
