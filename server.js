var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack-dev-server.config');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
})

server.listen(8080, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
