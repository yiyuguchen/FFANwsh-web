var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");

var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
    // historyApiFallback: false,
    aggregateTimeout: 300, // wait so long for more changes
    poll: true, // use polling instead of native watchers
    stats: {
       colors: true    // 用颜色标识
    },
    hot: true, //热启动
    publicPath: config.output.publicPath    
}).listen(9000, function(err, result) {
    if (err) {
        console.log(err);
    }
    
    console.log('server start at 8000');
});