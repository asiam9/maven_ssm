var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

var publicPath = config.output.publicPath;

var hostName = 'localhost';
if(!undefined == config.output.hostName ){
    hostName = config.output.hostName;
}

new WebpackDevServer(webpack(config), {
    publicPath: publicPath,
    hot: true,
    quiet: false,
    noInfo: false,
    watchOptions: {
        poll: 300
    },
    historyApiFallback: true
}).listen(config.port, hostName, function (err, result) {
    if (err)
        console.log(err);
    console.log('Listening at '+hostName+':3000');
});
